import React from 'react';
import ScoreBoard from './ScoreBoard';
import PlayArea from './PlayArea';

class Game extends React.Component {
  constructor(props){
    super(props);
    this.emptyGameBoard = this.emptyGameBoard.bind(this);
    this.addCaterpillar = this.addCaterpillar.bind(this);
    this.generateFood = this.generateFood.bind(this);
    this.updateState = this.updateState.bind(this);
    this.state={
      gameBoard: this.emptyGameBoard(15),
      score: 0,
      foodCoords: [],
      caterpillarCoords: [[0,0]]
    };
  }

  emptyGameBoard(size){
    let gameBoard = [];
    for(let i =0; i < size; i++)
    {
      let row=[];
      for(let j = 0; j<size; j++)
      {
        row.push('0');
      }
      gameBoard.push(row);
    }
    return gameBoard;
  }
  
  updateState(){
    let gameBoard = this.addCaterpillar();
    const foodCoordinates = this.generateFood();
    gameBoard = this.addFood(gameBoard, foodCoordinates);
    console.log(gameBoard);
    this.setState({
      gameBoard: gameBoard,
      foodCoords: foodCoordinates
    });
  }

  addCaterpillar(){
    let gameBoard = this.state.gameBoard.slice();
    for(let i=0; i< this.state.caterpillarCoords.length; i++){
      const x = this.state.caterpillarCoords[i][0];
      const y = this.state.caterpillarCoords[i][1];
      if(i==0){
        gameBoard[x][y] = 'head';
      } else {
        gameBoard[x][y] = 'body';
      }
    }
    return gameBoard;
  }

  generateFood(){
    let foodCoordinates = this.state.foodCoords.slice();
    //let foodCoordinates = state.foodCoords;
    while(foodCoordinates.length < 5){
      // if generates error ==> missing food coordinate from array ==> make new one
      let randomX = Math.floor(Math.random()*this.state.gameBoard.length);
      let randomY = Math.floor(Math.random()*this.state.gameBoard.length);
      const newCoord = [randomX, randomY];
      if(!this.state.caterpillarCoords.includes(newCoord)){
        foodCoordinates.push(newCoord);
      }
    }
    return foodCoordinates;
  }

  addFood(gameBoard, foodCoordinates){
    for (let i=0; i< foodCoordinates.length; i++){
      console.log(foodCoordinates[i]);
      gameBoard[foodCoordinates[i][0]][foodCoordinates[i][1]] = 'flower';
    }
    return gameBoard;
  }
  
  componentDidMount(){
    this.updateState();
    console.log(this.state);
  }

  render(){
    return (
      <div>
        <ScoreBoard score={this.state.score}/>
        <PlayArea gameBoard={this.state.gameBoard}/>
      </div>
    );
  }

  
}
  
export default Game;
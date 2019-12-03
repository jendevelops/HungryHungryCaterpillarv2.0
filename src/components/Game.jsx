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
    this.moveCaterpillar = this.moveCaterpillar.bind(this);
    this.growCaterpillar = this.growCaterpillar.bind(this);
    this.isFoodEaten = this.isFoodEaten.bind(this);
    this.state={
      gameBoard: this.emptyGameBoard(15),
      score: 0,
      foodCoords: [[-1,-1]],
      caterpillarCoords: [[0,0]],
      direction: 39
    };
    this.playDiv = React.createRef();
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
    let gameBoard = this.emptyGameBoard(this.state.gameBoard.length);
    gameBoard = this.addCaterpillar(gameBoard);
    const foodCoordinates = this.generateFood();
    gameBoard = this.addFood(gameBoard, foodCoordinates);
    this.setState({
      gameBoard: gameBoard,
      foodCoords: foodCoordinates
    });
  }

  addCaterpillar(gameBoard){
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
    if(foodCoordinates.length === 1 && foodCoordinates[0][0] < 0 ){
      foodCoordinates = [];
    }
    while(foodCoordinates.length < 5){
      // if missing food coordinate from array ==> make new one
      let randomX = Math.floor(Math.random()*this.state.gameBoard.length);
      let randomY = Math.floor(Math.random()*this.state.gameBoard.length);
      const newCoord = [randomX, randomY];
      if(!this.state.caterpillarCoords.includes(newCoord) && !foodCoordinates.includes(newCoord)){
        foodCoordinates.push(newCoord);
      }
    }
    return foodCoordinates;
  }

  addFood(gameBoard, foodCoordinates){
    for (let i=0; i< foodCoordinates.length; i++){
      gameBoard[foodCoordinates[i][0]][foodCoordinates[i][1]] = 'flower';
    }
    return gameBoard;
  }

  moveCaterpillar(event){
    let directionLetter = event.keyCode;
    
    let caterpillarCoords = this.growCaterpillar(directionLetter);
    let headX = caterpillarCoords[0][0];
    let headY = caterpillarCoords[0][1];
    let boardSize = this.state.gameBoard.length;
    
    if(directionLetter === 37 || directionLetter === 65){ // left
      headY = (headY - 1) >= 0 ? (headY - 1) % boardSize : (headY - 1) + boardSize;
    } else if (directionLetter === 38 || directionLetter === 87){ // up
      headX = (headX - 1) >= 0 ? (headX -1)% boardSize : (headX-1)+boardSize;
    } else if (directionLetter === 39 || directionLetter === 68){ //right
      headY = (headY + 1) % boardSize;
    } else if (directionLetter === 40 || directionLetter === 83) { // down
      headX = (headX+1) % boardSize;
    }

    let newHeadCoord = [headX, headY];
    let newCaterpillarCoords = [newHeadCoord, ...caterpillarCoords];
    newCaterpillarCoords.pop();
    this.setState({caterpillarCoords: newCaterpillarCoords, direction: directionLetter}, () => this.updateState())
  }

  isFoodEaten(){
    let ateFood = false;
    const [headX, headY] = this.state.caterpillarCoords[0];
    let newFoodCoords = this.state.foodCoords.slice();
    this.state.foodCoords.forEach((foodCoordinate) => {
      const [foodX, foodY] = foodCoordinate;
      if (foodX === headX && foodY === headY){
        ateFood = true;
        const ateFoodIndex = newFoodCoords.indexOf(foodCoordinate);
        newFoodCoords.splice(ateFoodIndex, 1);
        this.setState({foodCoords: newFoodCoords});
      }
    });
    return ateFood;
  }

  growCaterpillar(direction){
    let [bodyX, bodyY] = this.state.caterpillarCoords[this.state.caterpillarCoords.length -1];
    let newCaterpillarCoords = this.state.caterpillarCoords.slice();
    if(this.isFoodEaten()){
      if (direction === 37 || direction === 65) { // left
        bodyY += 1;
      } else if (direction === 38 || direction === 87) { // up
        bodyX -= 1;
      } else if (direction === 39 || direction === 68) { // right
        bodyY -= 1;
      } else if (direction === 40 || direction === 83) { // down
        bodyX += 1;
      }
      const boardSize = this.state.gameBoard.length;
      bodyX = bodyX >= 0 ? bodyX % boardSize : bodyX + boardSize;
      bodyY = bodyY >= 0 ? bodyY % boardSize : bodyY + boardSize;
      newCaterpillarCoords.push([bodyX,bodyY]);
    }
    return newCaterpillarCoords;
  }
  
  componentDidMount(){
    this.playDiv.current.focus();
    this.updateState();
  }

  render(){
    return (
      <div onKeyDown={(event) => this.moveCaterpillar(event)} tabIndex="0" ref={this.playDiv}>
        <ScoreBoard score={this.state.score}/>
        <PlayArea gameBoard={this.state.gameBoard} />
      </div>
    );
  }

  
}
  
export default Game;
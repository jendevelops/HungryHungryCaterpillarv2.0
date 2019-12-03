import React from 'react';
import ScoreBoard from './ScoreBoard';
import PlayArea from './PlayArea';

class Game extends React.Component {
  constructor(props){
    super(props);
    this.emptyGameBoard = this.emptyGameBoard.bind(this);
    this.state={
      gameBoard: this.emptyGameBoard(8),
      score: 0
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
import React from 'react';
import ScoreBoard from './ScoreBoard';
import PlayArea from './PlayArea';

function Game(props) {
  return (
    <div>
      <ScoreBoard />
      <PlayArea />
    </div>
    )
  }
  
export default Game;
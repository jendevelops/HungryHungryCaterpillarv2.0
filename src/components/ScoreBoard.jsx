import React from 'react';

function ScoreBoard(props)
{
  return (
    <div>
      <h2>Score: <span>{props.score}</span></h2>
    </div>
  )
}

export default ScoreBoard;
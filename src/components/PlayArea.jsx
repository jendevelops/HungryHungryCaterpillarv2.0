import React from 'react';
import Caterpillar from './Caterpillar';
import Food from './Food';

function PlayArea(props)
{
  let gameBoard = props.gameBoard;
  return (
    <div>
      {gameBoard.map((row) =>
        row.map((content) => <Tile type={content} />))}
    </div>
  )
}

export default PlayArea;
import React from 'react';
import Tile from './Tile';

function PlayArea(props)
{
  let gameBoard = props.gameBoard;
  return (
    <div>
      {gameBoard.map((row, rowIndex) =>
        row.map((content,colIndex) => <Tile type={content} key={rowIndex + '-' + colIndex}/>))}
    </div>
  );
}

export default PlayArea;
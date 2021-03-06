import React from 'react';
import Tile from './Tile';

function PlayArea(props)
{
  let gameBoard = props.gameBoard;
  function makeRow(rowArray, rowIndex){
    var rowStyle = {
      padding: '0px',
      margin: '0px',
      fontSize: '0'
    }
    return(
      <div style={rowStyle} key={rowIndex}>
        {rowArray.map((content, colIndex) => <Tile type={content} key={`${rowIndex}-${colIndex}`} />)}
      </div>
    )
  }
  return (
    <div>
      {gameBoard.map((row, rowIndex) => {
          return(makeRow(row, rowIndex));
        })
      }

    </div>
  );
}

export default PlayArea;
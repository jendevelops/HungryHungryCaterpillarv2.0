import React from 'react';

function GameOver(props){
  return(
    <div>
      <h1>GAME OVER</h1>
      <button type="button" onClick={props.onMenuClick}>Back to Menu</button>
    </div>
  )
}

export default GameOver;
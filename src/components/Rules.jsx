import React from 'react';

function Rules(){
  return (
    <div>
      <h2>Rules</h2>
      <p>Play using the arrow keys to move the caterpillar around the board.</p>
      <p>Try to eat as many flowers as you can without hitting yourself or any enemies!</p>
      <p>Watch you grow as you eat more and more!</p>
      <button type='button' onClick={props.onMenuClick}>Return to Menu</button>
    </div>
  );
}

export default Rules;
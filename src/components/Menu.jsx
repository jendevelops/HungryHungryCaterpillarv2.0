import React from 'react';

function Menu(props)
{
  return (
    <div>
      <h1>Hungry Hungry Caterpillar</h1>
      <button type='button' onClick={props.handleStartClick}>Start</button>
      <button type='button' onClick={props.handleRulesClick}>Rules</button>
    </div>
  )
}

export default Menu;
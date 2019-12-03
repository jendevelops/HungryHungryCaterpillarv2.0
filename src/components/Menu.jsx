import React from 'react';
import PropTypes from 'prop-types';

function Menu(props)
{
  console.log(props);
  return (
    <div>
      <h1>Hungry Hungry Caterpillar</h1>
      <button type='button' onClick={props.onStartClick}>Start</button>
      <button type='button' onClick={props.onRulesClick}>Rules</button>
    </div>
  );
}

Menu.propTypes = {
  onStartClick: PropTypes.func,
  onRulesClick: PropTypes.func
}

export default Menu;
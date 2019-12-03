import React from 'react';
import Caterpillar from './Caterpillar';
import Food from './Food';

function PlayArea(props)
{
  return (
    <div>
      <Food />
      <Caterpillar />
    </div>
  )
}

export default PlayArea;
import React from 'react';
import Head from '../assets/head.png';
import Body from '../assets/body.png';
import Flower from '../assets/flower.png';
import Bird from '../assets/bird.png';


function Tile(props)
{
  function tileContent(contentType)
  {
    switch (contentType) {
    case 'head':
      return <img src={Head} />;

    case 'body':
      return <img src={Body} />;

    case 'flower':
      return <img src={Flower} />;

    case 'enemy':
      return <img src={Bird} />;
    
    default:
      return null;
    }
  }
  var tileStyle = {
    width: '50px',
    maxHeight: '50px'
  };
  return (
    <div style={tileStyle}>
      {tileContent(props.type)}
    </div>
  );
}

export default Tile;
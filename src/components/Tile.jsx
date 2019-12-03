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
      return <img style={imgStyle} src={Head} />;

    case 'body':
      return <img style={imgStyle} src={Body} />;

    case 'flower':
      return <img style={imgStyle} src={Flower} />;

    case 'enemy':
      return <img style={imgStyle} src={Bird} />;
    
    default:
      return null;
    }
  }
  var tileStyle = {
    width: '50px',
    maxHeight: '50px',
    minHeight: '49px',
    backgroundColor: 'grey',
    display: 'inline-block',
    padding: '0px',
    margin: '0px'
  };
  var imgStyle = {
    width: '50px',
    height: '49px'
  }
  return (
    <div style={tileStyle}>
      {tileContent(props.type)}
    </div>
  );
}

export default Tile;
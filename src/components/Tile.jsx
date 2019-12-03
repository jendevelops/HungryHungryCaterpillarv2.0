import React from 'react';

function Tile(props)
{
  function tileContent(contentType)
  {
    switch (contentType) {
      case 'head':
        return <img src={head} />;

      case 'body':
        return <img src={body} />;

      case 'flower':
        return <img src={flower} />;

      case 'enemy':
        return <img src={enemy} />;
    
      default:
        return null;
    }
  }
  return (
    <div>
      {tileContent(props.type)}
    </div>
  )
}

export default Tile;
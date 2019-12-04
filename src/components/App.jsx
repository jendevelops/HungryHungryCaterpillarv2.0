import React from 'react';
import Menu from './Menu';
import Game from './Game';
import Rules from './Rules';
import GameOver from './GameOver';

class App extends React.Component{

  constructor(props){
    super(props);
    this.state={
      display: 'menu'
    };
    this.handleRulesClick = this.handleRulesClick.bind(this);
    this.handleStartClick = this.handleStartClick.bind(this);
    this.handleMenuClick = this.handleMenuClick.bind(this);
    this.componentToRender = this.componentToRender.bind(this);
    this.handleGameOver = this.handleGameOver.bind(this);
  }
  handleStartClick(){
    let newState = 'start';
    this.setState({display: newState});
  }
  handleRulesClick(){
    let newState = 'rules';
    this.setState({display: newState});
  }
  handleMenuClick(){
    let newState = 'menu';
    this.setState({display: newState});
  }

  handleGameOver(){
    let newState = 'gameOver';
    this.setState({ display: newState });
    console.log("game over");
  }

  componentToRender(component){
    switch (component) {
    case 'start':
      return <Game onGameOver={this.handleGameOver}/>;
    case 'rules':
      return <Rules onMenuClick={this.handleMenuClick}/>;
      case 'gameOver':
        return <GameOver onMenuClick={this.handleMenuClick} />;
    default:
      return <Menu onStartClick={this.handleStartClick} onRulesClick={this.handleRulesClick}/>;
    }
  }
  render(){
    return (
      <div>
        { this.componentToRender(this.state.display) }
      </div>
    );
  }
  
}
export default App;
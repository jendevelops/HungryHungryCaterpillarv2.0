import React from 'react';
import Menu from './Menu';
import Game from './Game';
import Rules from './Rules';

class App extends React.Component{

  constructor(props){
    super(props);
    this.state={
      display: 'menu'
    };
    this.handleRulesClick = this.handleRulesClick.bind(this);
    this.handleStartClick = this.handleStartClick.bind(this);
  }
  handleStartClick(){
    let newState = {display: 'start'};
    this.setState=newState;
  }
  handleRulesClick(){
    let newState = { display: 'rules' };
    this.setState = newState;
    console.log(this.state);
  }
  handleMenuClick(){
    let newState = { display: 'menu' };
    this.setState = newState;
  }

  componentToRender(component){
    switch (component) {
    case 'start':
      return <Game />;
    case 'rules':
      return <Rules onMenuClick={this.handleMenuClick}/>;
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
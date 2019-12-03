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
    this.handleMenuClick = this.handleMenuClick.bind(this);
    this.componentToRender = this.componentToRender.bind(this);
  }
  handleStartClick(){
    let newState = 'start';
    this.setState({display: newState});
    console.log(this.state);
  }
  handleRulesClick(){
    let newState = 'rules';
    this.setState({display: newState});
    console.log(this.state);
  }
  handleMenuClick(){
    let newState = 'menu';
    this.setState({display: newState});
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
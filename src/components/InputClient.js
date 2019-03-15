import React, { Component } from 'react';
import CreateBreakfast from './CreateBreakfast';

class InputClient extends Component {
  constructor(props){
    super(props);

    this.state = {
      showName: false,
      name : null,
      showMenu: false,
    };
  }
  handleInput(event){
    this.setState({name: event.target.value});
  }
  handleSubmit(event){
    event.preventDefault();
    console.log(this.state.name);
    this.setState({
      showName: true,
      showMenu: true,

    });
  }
  

  render(){
    const showClient = (this.state.showName ? (' PEDIDO DE '+(this.state.name).toUpperCase()):' ');
    const printMenu = (this.state.showMenu ? (<CreateBreakfast />):' ');
    
    return(
      <div>
        <form className="card-body" onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" onChange={this.handleInput.bind(this)} value={this.state.name} />
          <input type="submit" />
        </form>
        <h5>{showClient}</h5>
        {printMenu}
        
      </div>
    )
  }

}

  export default InputClient;  

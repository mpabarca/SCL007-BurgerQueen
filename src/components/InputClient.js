import React, { Component } from 'react';
import CreateBreakfast from './CreateBreakfast';
import CreateDinner from './CreateDinner';

class InputClient extends Component {
  constructor(props){
    super(props);

    this.state = {
      showName: false,
      name : null,
      showBreakfast: false,
      showDinner: false,
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
      showBreakfast: true,
      showDinner: true,

    });
  }
  

  render(){
    const showClient = (this.state.showName ? (' PEDIDO DE '+(this.state.name).toUpperCase()):' ');
    const printBreakfast = (this.state.showBreakfast ? (<CreateBreakfast />):' ');
    const printDinner = (this.state.showDinner ? (<CreateDinner />):' ');
    return(
      <div>
        <form className="card-body" onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" onChange={this.handleInput.bind(this)} value={this.state.name} />
          <input type="submit" />
        </form>
        <h5>{showClient}</h5>
        {printBreakfast}
        {printDinner}
        
      </div>
    )
  }

}

  export default InputClient;  

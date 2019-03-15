import React, { Component } from 'react';

class InputClient extends Component {
  constructor(props){
    super(props);

    this.state = {
      showMenu:false,
      name : null,
    };
  }
  handleInput(event){
    this.setState({name: event.target.value});
  }
  handleSubmit(event){
    event.preventDefault();
    console.log(this.state.name);
    this.setState({
      showMenu: true,

    });
  }
  

  render(){
    const showClient = (this.state.showMenu ? (' PEDIDO DE '+(this.state.name).toUpperCase()):' ');
    return(
      <div>
        <form className="card-body" onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" onChange={this.handleInput.bind(this)} value={this.state.name} />
          <input type="submit" />
        </form>
        <h5>{showClient}</h5>
        
      </div>
    )
  }

}

  export default InputClient;  

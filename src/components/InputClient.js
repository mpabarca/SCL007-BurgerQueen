import React, { Component } from 'react';

class InputClient extends Component {
  constructor(props){
    super(props);

    this.state = {
      showMenu : false,
      name : null,
    };
  }
  handleInput(event){
    this.setState({name: event.target.value});
  }
  handleSubmit(event){
    event.preventDefault();
    console.log(this.state.name);
  }
  render(){
    return(
      <div>
        <form className="card-body" onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" onChange={this.handleInput.bind(this)} value={this.state.name} />
          <input type="submit" />
        </form>
        
      </div>
    )
  }

}

  export default InputClient;  

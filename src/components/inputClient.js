import React, { Component } from 'react';

class InputClient extends Component {
  constructor(props){
    super(props);

    this.state = {
      showMessage : false,
      name : ' ',
    };
  }
  handleClick(event){
    this.setState({name:event.target.value})
  }
  render(){
    return(
      <div>
        <input type="text" onChange={this.handleClick.bind(this)} value={this.state.name} />
      </div>
    )
  }

}

/*
class InputClient extends Component {

  submitFormHandler = event => {
    event.preventDefault();
    console.dir(this.refs.name.value); //will give us the name value
  }
  accountClick(newClient){
    return(
      <h6>Hola! </h6>
    )
  }
  render() {
    return (
        <div>
  
          <form onSubmit={this.submitFormHandler}>
            <div>
              <h6>Ingresar nombre Cliente</h6>
              <input type="text" name="name" ref="name" />
              <input type="submit"/>
            </div>
          </form>
  
        </div>
    );
  }
}
*/  
  export default InputClient;  

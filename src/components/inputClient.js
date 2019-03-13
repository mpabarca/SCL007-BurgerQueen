import React, { Component } from 'react';

class InputClient extends Component {

  submitFormHandler = event => {
    event.preventDefault();
    
    console.dir(this.refs.name.value); //will give us the name value
  }
  
  render() {
    return (
        <div>
  
          <form onSubmit={this.submitFormHandler}>
            <div>
              <input type="text" name="name" ref="name" />
            </div>
          </form>
  
        </div>
    );
  }
}
  
  export default InputClient;  

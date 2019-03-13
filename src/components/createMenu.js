import React, { Component } from 'react';

class CreateMenu extends Component {
    constructor(props){
      super(props);
      this.state={
        breakfast
      };
    }
  
    render() {
  
    const menu = this.state.breakfast.map((food,i)=>{
      return(
        <div className="col-md-4">
          <div className="card mt-4">
            <div className="card-header">
              <h3>{food.name}</h3>
            </div>
            <div className="card-body">
              <p>{food.price}</p>
            </div>
          </div>
        </div>
      )
    })
      return (
        <div className="App">
          <nav className="navbar navbar-dark bg-dark">
              <a href="" className="text-white">
                  {this.state.tittle} - {this.state.nmenu}
              </a>
          </nav> 
          <div className="container">
            <div className="row mt-4">
              {menu}
            </div>
          </div>
          
        </div>
      );
    }
  }
  export default CreateMenu;  
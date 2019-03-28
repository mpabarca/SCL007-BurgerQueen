import React, { Component } from 'react';
import { dinner } from "./json/dinner.json";

class CreateDinner extends Component {
  constructor(props){
    super(props);
    this.state={
      dinner: dinner,
      printMenu:false,
    };
  }
  _printMenu = (bool) => {
    this.setState({
      printMenu: bool
    });
  }

  render() {

  const menu = this.state.dinner.map((food,i)=>{
    return(
      
          <div className="card mt-4">
            <div className="card-header">
              <h5>{food.name}</h5>
            </div>
            <div className="card-body">
              <p>{food.price}</p>
            </div>
          </div>
        
    )
  })
    return (
      <div className="menu">
        <div>
          <button onClick={this._printMenu.bind(null, true)}>ALMUERZO</button>
          <div className="container">
            <div className="row mt-4">
              { this.state.printMenu && <div>{menu}</div> }
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default CreateDinner;  
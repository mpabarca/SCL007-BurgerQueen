import React, { Component } from 'react';
import { dinner } from "./dinner.json";

class CreateDinner extends Component {
    constructor(props){
      super(props);
      this.state={
        dinner
      };
    }
  
    render() {
  
    const menu = this.state.dinner.map((food,i)=>{
      return(
        <div className="col-m d-4">
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
        <div className="menu">
          <div className="container">
            <div className="row mt-4">
              {menu}
            </div>
          </div>
          
        </div>
      );
    }
  }
  export default CreateDinner;  
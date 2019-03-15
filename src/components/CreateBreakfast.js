import React, { Component } from 'react';
import { breakfast } from "./breakfast.json";

class CreateBreakfast extends Component {
    constructor(props){
      super(props);
      this.state={
        breakfast
      };
    }

  
    render() {
  
    const menu = this.state.breakfast.map((food,i)=>{
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
            <button className="buttonBreakfast">DESAYUNO</button>
            <div className="row mt-4">
              {menu}
            </div>
          </div>
          
    
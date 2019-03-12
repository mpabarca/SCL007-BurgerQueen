import React, { Component } from 'react';
import './App.css';
import fire from './firebase.js';
import Home from './home.js';
import Login from './login.js';

import { breakfast } from "./breakfast.json";


export default App;

/*
class App extends React.Component {
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
*/

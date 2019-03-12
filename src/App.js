import React, { Component } from 'react';
import './App.css';
import firebase from './fire';
import Home from './home';
import Login from './login';

import { breakfast } from "./breakfast.json";
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
class App extends Component {
  constructor() {
    super();
    this.state = ({
      user: null,
    });
    this.authListener = this.authListener.bind(this);
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        this.setState({ user });
        localStorage.setItem('user', user.uid);
      } else {
        this.setState({ user: null });
        localStorage.removeItem('user');
      }
    });
  }
  render() {
    return (
     <div>{this.state.user ? : ( <Home/>) : (<Login />)}</div>
    )}
}

export default App;

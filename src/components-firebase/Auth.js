import React, { Component } from 'react';

import fire  from './Fire';
import Login from './Login';
import Home from './Home';

import './css/login.css';

class Auth extends Component {
  constructor(props){
    super(props);
    this.state = {
      user:{},
    }
  }

  componentDidMount(){
    this.authListener();
  }

  authListener(){
    fire.auth().onAuthStateChanged((user) => {
      console.log(user);
      if (user){
        this.setState({ user });
        localStorage.removeItem('user');
      } else {
        this.setState({ user: null});
        localStorage.removeItem('user');
      }
    });
  }

  render() {
    return (
      <div className="Auth">
        {this.state.user ? (<Home />) : (<Login />)}        
      </div>
    );
  }
}

export default Auth;
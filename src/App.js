import React, { Component } from 'react';
import './App.css';
import Auth from './components-firebase/Auth';
import ShowMenu from './components/ShowMenu';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Auth/>
        <ShowMenu />
      </div>
    );
  }
}

export default App;

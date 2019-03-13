import React, { Component } from 'react';
import './css/App.css';
import InputClient from './components/inputClient';
import CreateMenu from './components/createMenu';


class App extends Component {
  
  render() {
    return (
      <div className="App">
        <InputClient />     
        <CreateMenu />
      </div>
    )
  }
}

export default App;


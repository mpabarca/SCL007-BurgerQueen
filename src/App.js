import React, { Component } from 'react';
import './css/App.css';
import InputClient from './components/inputClient';

import { breakfast } from "./json/breakfast.json";

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <InputClient />      
      </div>
    )
  }
}

export default App;


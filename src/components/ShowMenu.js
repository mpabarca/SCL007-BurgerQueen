import React, { Component } from 'react';
import InputClient from './InputClient';
import CreateBreakfast from './CreateBreakfast';
import CreateDinner from './CreateDinner';

class ShowMenu extends Component {


    render() {
      return (
        <div className="ShowMenu">
          <InputClient />  
          <CreateBreakfast />
        </div>
      )
    }
  }
  
  export default ShowMenu;
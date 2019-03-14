import React, { Component } from 'react';
import InputClient from './InputClient';
import CreateMenu from './CreateMenu';

class ShowMenu extends Component {


    render() {
      return (
        <div className="ShowMenu">
          <InputClient />  
          <CreateMenu />
        </div>
      )
    }
  }
  
  export default ShowMenu;
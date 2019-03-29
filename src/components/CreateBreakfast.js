import React, { Component } from 'react';
import { breakfast } from "./json/breakfast.json";
import { Row, Button } from 'react-bootstrap';

class CreateBreakfast extends Component {
    constructor(props){
      super(props);
      this.state={
        breakfast: breakfast,
        printMenu:false,
      };
    }
    _printMenu = (bool) => {
      this.setState({
        printMenu: bool
      });
    }
  
    render() {
  
    const menu = this.state.breakfast.map((food,i)=>{
      let foodMenu = food.name +'-'+  food.price;
      return(
            <div>
              <Button variant="secondary" size="lg" value={foodMenu} block>
                <h6>{food.name} {food.price}</h6>
              </Button>
            </div>
          
      )
    })
      return (
          <div>
            <button onClick={this._printMenu.bind(null, true)}>DESAYUNO</button>
            <Row>
              { this.state.printMenu && <div>{menu}</div> }
            </Row>
          </div>
      );
    }
  }
  export default CreateBreakfast;  
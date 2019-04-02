import React, { Component } from 'react';
import { dinner } from "./json/dinner.json";
import { Row, Button } from 'react-bootstrap';

class CreateDinner extends Component {
  constructor(props){
    super(props);
    this.state={
      dinner: dinner,
      printMenu:false,
    };
  }
  _printMenu = (bool) => {
    this.setState({
      printMenu: bool
    });
  }
  handleSubmit(event){
    console.log(event.target.value);
  }

  render() {

  const menu = this.state.dinner.map((food,i)=>{
    let foodMenu = food.name +'-'+  food.price;

    return(
      
        <div>
          <Button  variant="secondary" size="lg" value={foodMenu} onClick={this.handleSubmit} block>
            <h6>{food.name} {food.price}</h6>
          </Button>
        </div>
        
    )
  })
    return (
        <div>
          <button onClick={this._printMenu.bind(null, true)}>ALMUERZO</button>
            <Row>
              { this.state.printMenu && <div>{menu}</div> }
            </Row>
        </div>
    );
  }
}
export default CreateDinner;  
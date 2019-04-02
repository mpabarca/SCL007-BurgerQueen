import React, { Component } from 'react';
import { dinner } from "./json/dinner.json";
import { Row, Button } from 'react-bootstrap';

class CreateDinner extends Component {
  constructor(props){
    super(props);
    this.handleSubmitDinner=this.handleSubmitDinner.bind(this);
    this.state={
      dinner: dinner,
      printMenu:false,
      orders:[]
    };
  }
  _printMenu = (bool) => {
    this.setState({
      printMenu: bool
    });
  }
  handleSubmitDinner(event){
    let order=event.target.value;
    this.state.orders.push(order);

    this.props.handleSubmitDinner(this.state.orders);
  }

  render() {

  const menu = this.state.dinner.map((food,i)=>{
    let foodMenu = food.name + food.price;

    return(
      
        <div>
          <Button  variant="secondary" size="lg" value={foodMenu} onClick={this.handleSubmitDinner} block>
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
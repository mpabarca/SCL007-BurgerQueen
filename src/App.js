import React, { Component } from 'react';
import './App.css';
import Client from './components/Client';
import Order from './components/Order';
import { Container, Row, Col} from 'react-bootstrap';
import CreateBreakfast from './components/CreateBreakfast';
import CreateDinner from './components/CreateDinner';

class App extends Component {

  handleSubmitBreakfast=(data)=>{
    let orderBreakfast = data;
    let orderBreakfastName=[];
    let orderBreakfastPrice=[];

    orderBreakfast.map((food,i) => {
      let foodArray = food.split("$");
      orderBreakfastName.push(foodArray[0]);
      orderBreakfastPrice.push(foodArray[1]);
      
   });
  }
  handleSubmitDinner=(data)=>{
    let orderDinner = data;
    let orderDinnerName=[];
    let orderDinnerPrice=[];

    orderDinner.map((food,i) => {
      let foodArray = food.split("$");
      orderDinnerName.push(foodArray[0]);
      orderDinnerPrice.push(foodArray[1]);
      
   });
  }

  render() {
    return (
      <div>
        <Container>
          <Row><Client/></Row>
          <Row>
            <Col xs={6} md={6} lg={6}><Row>
              <Col xs={6} md={6} lg={6}> 
                <CreateBreakfast 
                  handleSubmitBreakfast={this.handleSubmitBreakfast}
                  /> 
              </Col>
              <Col xs={6} md={6} lg={6}> 
                <CreateDinner
                  handleSubmitDinner={this.handleSubmitDinner}
                />
              </Col>
            </Row></Col>
            <Col xs={6} md={6} lg={6} ><Order/></Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;

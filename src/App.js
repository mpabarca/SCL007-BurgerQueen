import React, { Component } from 'react';
import './App.css';
import Client from './components/Client';
import Order from './components/Order';
import { Container, Row, Col} from 'react-bootstrap';
import CreateBreakfast from './components/CreateBreakfast';
import CreateDinner from './components/CreateDinner';

class App extends Component {

  constructor(props){
    super(props);
    this.state={
      orderName:[],
      orderPrice:[],
      order:[]
    }
  }

  handleSubmitBreakfast=(data)=>{
    let orderBreakfast = data;
    let orderName=[];
    let orderPrice=[];

    orderBreakfast.map((food,i) => {
      let foodArray = food.split("$");
      orderName.push(foodArray[0]);
      orderPrice.push(foodArray[1]);
      
   });
    this.setState({
      orderName: orderName,
      orderPrice: orderPrice,
      order: orderBreakfast
    })
  }
  handleSubmitDinner=(data)=>{
    let orderDinner = data;
    let orderName=[];
    let orderPrice=[];

    orderDinner.map((food,i) => {
      let foodArray = food.split("$");
      orderName.push(foodArray[0]);
      orderPrice.push(foodArray[1]);
      
   });
   this.setState({
    orderName: orderName,
    orderPrice: orderPrice,
    order: orderDinner
  })
  
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
            <Col xs={6} md={6} lg={6} >
              <Order
                orderName={this.state.orderName}
                orderPrice={this.state.orderPrice}
                order={this.state.order}
              />
              </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;

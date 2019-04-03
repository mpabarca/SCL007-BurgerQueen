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

  //Agregar orden Desayuno
  handleSubmitBreakfast=(item)=>{
     console.log(item); 
    
    let foodArray = item.split("$");
    console.log(foodArray);

    this.setState({
      orderName: [...this.state.orderName,foodArray[0]],
      orderPrice: [...this.state.orderPrice,foodArray[1]],
      order: [...this.state.order,item]
    })
    
  }

  //Agregar orden Cena
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

  //Eliminar un producto de la orden
  deleteFood=(index)=>{
    const actualOrder = [... this.state.order];
    const actualOrderName = [... this.state.orderName];
    const actualOrderPrice = [... this.state.orderPrice];

    const deleteOrder = actualOrder.splice(index,1);
    const deleteOrderName = actualOrderName.splice(index,1);
    const deleteOrderPrice = actualOrderPrice.splice(index,1);

    this.setState({
      order: actualOrder,
      orderName: actualOrderName,
      orderPrice: actualOrderPrice
    })
    console.log(deleteOrderName + ' eliminado desde apps.js')
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
                deleteFood={this.deleteFood}
              />
              </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;

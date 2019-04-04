import React, { Component } from 'react';
import './App.css';
import Client from './components/Client';
import Order from './components/Order';
import TotalOrder from './components/TotalOrder';
import GetOrder from './components/GetOrder';
import { Container, Row, Col} from 'react-bootstrap';
import CreateBreakfast from './components/CreateBreakfast';
import CreateDinner from './components/CreateDinner';

class App extends Component {

  constructor(props){
    super(props);
    this.state={
      orderName:[],
      orderPrice:[],
      order:[],
      client:''
    }
  }
  //Obtener nombre cliente
  updateClient=(client)=>{
    this.setState({
      client:client
    })
  }

  //Agregar orden Desayuno
  handleSubmitBreakfast=(item)=>{
    
    let foodArray = item.split("$");

    this.setState({
      orderName: [...this.state.orderName,foodArray[0]],
      orderPrice: [...this.state.orderPrice,foodArray[1]],
      order: [...this.state.order,item]
    })
    
  }

  //Agregar orden Cena
  handleSubmitDinner=(item)=>{
    
    let foodArray = item.split("$");

    this.setState({
      orderName: [...this.state.orderName,foodArray[0]],
      orderPrice: [...this.state.orderPrice,foodArray[1]],
      order: [...this.state.order,item]
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
  }

  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col>
              <Client
                updateClient={this.updateClient}
              />
            </Col>
            <Col>
              <GetOrder
                updateOrder={this.state.orderName}
                client={this.state.client}
              />
            </Col>
          </Row>
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
              <TotalOrder
                orderPrice={this.state.orderPrice}/>
              </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import Client from './component-client/Client';
import Order from './component-order/Order';
import { Container, Row, Col} from 'react-bootstrap';
import CreateBreakfast from './component-menu/CreateBreakfast';
import CreateDinner from './component-menu/CreateDinner';

class App extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row><Client/></Row>
          <Row>
            <Col xs={6} md={6} lg={6}><Row>
              <Col xs={6} md={6} lg={6}> <CreateBreakfast/> </Col>
              <Col xs={6} md={6} lg={6}> <CreateDinner/> </Col>
            </Row></Col>
            <Col xs={6} md={6} lg={6} ><Order/></Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;

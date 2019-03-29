import React, { Component } from 'react';
import './App.css';
import Client from './components/Client';
import Order from './components/Order';
import { Container, Row, Col} from 'react-bootstrap';
import CreateBreakfast from './components/CreateBreakfast';
import CreateDinner from './components/CreateDinner';

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

import React, { Component } from 'react';
import './App.css';
import Client from './component-client/Client';
import Order from './component-order/Order';
import { Container, Row, Col } from 'react-bootstrap';


class App extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col><Client /></Col>
          <Col><Order/></Col>
        </Row>
      </Container>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import Client from './component-client/Client';
import Order from './component-order/Order';
import { Container, Row, Col} from 'react-bootstrap';


class App extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col xs={6} md={6} lg={6} ><Client/></Col>
            <Col xs={6} md={6} lg={6} ><Order/></Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;

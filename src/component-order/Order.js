import React, {Component} from 'react';
import { Container, Row, Col, Table } from 'react-bootstrap';


class Order extends Component{

    render(){
        return(
            <Container>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>COMIDA</th>
                        <th>PRECIO</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>#</td>
                        <td>First Name</td>
                        <td>Last Name</td>
                        </tr>
                    </tbody>
                </Table>
            </Container>
        )
    }
}

export default Order;
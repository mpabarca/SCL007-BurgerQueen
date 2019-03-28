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
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                        </tr>
                    </thead>
                </Table>
            </Container>
        )
    }
}

export default Order;
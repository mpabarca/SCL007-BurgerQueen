import React, {Component} from 'react';
import { Container, Row, Col, Table } from 'react-bootstrap';


class Order extends Component{

    render(){
        let orderName= this.props.orderName;
        let orderPrice= this.props.orderPrice;
        let order= this.props.order;

        const orderFinal = order.map((food,i)=>{
            let foodName = orderName[i];
            let foodPrice= orderPrice[i];
        
            return(
              
                <tbody>
                    <tr>
                    <td>{i}</td>
                    <td>{foodName}</td>
                    <td>{foodPrice}</td>
                    </tr>
                </tbody>
                
            )
          })
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
                    {orderFinal}
                </Table>
            </Container>
        )
    }
}

export default Order;
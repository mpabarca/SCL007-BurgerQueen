import React, {Component} from 'react';
import { Container, Button, Col, Table } from 'react-bootstrap';


class Order extends Component{

    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
        this.state={
            order:[],
            orderName:[],
            orderPrice:[]
        }
        
    }

    handleSubmit(event){
        event.preventDefault();
        console.log(event.target.value);
        /*
        let itemRemove = event.target.value;
        let nameRemove = orderName.splice((itemRemove), 1);
        let orderRemove = order.splice((itemRemove), 1);
        let priceRemove = orderPrice.splice((itemRemove), 1);
        console.log (nameRemove + priceRemove +orderRemove);
        */
    }
    

    render(){
        let orderName=this.props.orderName;
        let orderPrice=this.props.orderPrice;
        let order=this.props.order;

        let orderFinal = order.map((food,i)=>{
            let foodName = orderName[i];
            let foodPrice= orderPrice[i];
        
            return(
              
                <tbody>
                    <tr>
                    <td>{i}</td>
                    <td>{foodName}</td>
                    <td>{foodPrice}</td>
                    <td><Button value={i} onClick={this.handleSubmit} className="btn btn-danger">X</Button></td>
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
                        <th></th>
                        </tr>
                    </thead>
                    {orderFinal}
                    
                </Table>
            </Container>
        )
    }
}

export default Order;
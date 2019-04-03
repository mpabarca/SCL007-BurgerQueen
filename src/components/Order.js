import React, {Component} from 'react';
import { Container, Button, Col, Table } from 'react-bootstrap';


class Order extends Component{

    constructor(props){
        super(props);
        this.deleteItem=this.deleteItem.bind(this);
        this.state={
            order:[],
            orderName:[],
            orderPrice:[]
        }
        
    }

    deleteItem(event,index){
        event.preventDefault();
        console.log(index);

        this.props.deleteFood(index);
    }
    

    render(){
        let orderName=this.props.orderName;
        let orderPrice=this.props.orderPrice;
        let order=this.props.order;
        let orderFinal;
        if (order.length>1){

        orderFinal = order.map((food,i)=>{
            let foodName = orderName[i];
            let foodPrice= orderPrice[i];
        
            return(
              
                <tbody>
                    <tr key={i}>
                    <td>{i}</td>
                    <td>{foodName}</td>
                    <td>{foodPrice}</td>
                    <td><Button value={i} onClick={(event) => this.deleteItem(event,i)} className="btn btn-danger">X</Button></td>
                    </tr>
                </tbody>
                
            )
          })
        }
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
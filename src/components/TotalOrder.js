import React, {Component} from 'react';
import {Container} from 'react-bootstrap';

class TotalOrder extends Component{
    render(){
        let orderPrice= this.props.orderPrice;
        
        let addPrice=0;
        orderPrice.map((element,i)=>{
            let price=Number(element);
            addPrice+=price;
        })
        return(
            <Container>
                <h4>Total compra: {addPrice}</h4>
            </Container>
        )
    }

}
export default TotalOrder;
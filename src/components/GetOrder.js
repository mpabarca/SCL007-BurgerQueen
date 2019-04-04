import React, {Component} from 'react';
import {Container, Button} from 'react-bootstrap';
import firebase from '../Firebase';
import 'firebase/firestore';

class GetOrder extends Component{
    /*
    addClient = (event) =>{
        //event.preventDefaul();
        const db=firebase.firestore();
        db.settings({
            timestampsInSnapshots: true
          });
        db.collection("client").add({
            name: this.state.name,
            total:2000,
            order:['Hamburguesa simple Vegetariana','Papas Fritas']
        }).then(()=>{
            console.log('subido')
        }).catch((error)=>{
            console.log(error);
        })

    }
    */
    render(){
        let updateOrder=this.props.orderName;
        let clientOrder=this.props.client;
        console.log(updateOrder);
        console.log(clientOrder);
        return(
            <Container>
                <Button onClick={this.addClient}>Enviar a cocina</Button>
            </Container>
        )
    }
}
export default GetOrder;
import React, {Component} from 'react';
import firebase from '../Firebase';
import 'firebase/firestore';
import { Container, Row, Col} from 'react-bootstrap';

import CreateBreakfast from '../component-menu/CreateBreakfast';
import CreateDinner from '../component-menu/CreateDinner';

class Client extends Component {
    constructor(){
        super();
        this.state={
            name:'',
            total:0,
            order:[],
            showBreakfast: false,
            showDinner: false,
            showName: false,
        };
        this.updateInput=this.updateInput.bind(this);
        this.addClient=this.addClient.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    updateInput= (event) =>{
        this.setState({
            name:event.target.value
        });
    }
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
    handleSubmit(event){
        event.preventDefault();
        console.log(this.state.name);
        this.setState({
          showName: true,
          showBreakfast: true,
          showDinner: true,
    
        });
      }

    render(){
        const showClient = (this.state.showName ? (' PEDIDO DE '+(this.state.name).toUpperCase()):' ');
        const printBreakfast = (this.state.showBreakfast ? (<CreateBreakfast />):' ');
        const printDinner = (this.state.showDinner ? (<CreateDinner />):' ');

        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h4>Ingresar nombre Cliente</h4>
                    <input
                        type="text"
                        name="name"
                        placeholder="Nombre cliente"
                        onChange= {this.updateInput}
                        value={this.state.name}
                    />
                    <input type="submit" onClick={this.addClient} />
                </form>
                <h5>{showClient}</h5>
                <Row>
                    <Col>{printBreakfast}</Col>
                    <Col>{printDinner}</Col>
                </Row>
            </div>
        )
    }
}

export default Client ;

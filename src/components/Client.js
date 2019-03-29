import React, {Component} from 'react';
import firebase from '../Firebase';
import 'firebase/firestore';
import { Container, Row, Col} from 'react-bootstrap';



class Client extends Component {
    constructor(){
        super();
        this.state={
            name:'',
            total:0,
            order:[],
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
        this.setState({
          showName: true,
    
        });
      }

    render(){
        const showClient = (this.state.showName ? (' PEDIDO DE '+(this.state.name).toUpperCase()):' ');

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
            </div>
        )
    }
}

export default Client ;

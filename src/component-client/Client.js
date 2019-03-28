import React, {Component} from 'react';
import firebase from '../Firebase';
import 'firebase/firestore';

import showBreakfast from '../component-menu/CreateBreakfast';
import showDinner from '../component-menu/CreateDinner';

class Client extends Component {
    constructor(){
        super();
        this.state={
            name:'',
            total:0,
            order:[]
        };
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
        
        return(
            <div>
                <input
                    type="text"
                    name="name"
                    placeholder="Nombre cliente"
                    onChange= {this.updateInput}
                    value={this.state.name}
                />
                <input type="submit" onClick={this.addClient}/>
            </div>
        )
    }
}

export default Client ;

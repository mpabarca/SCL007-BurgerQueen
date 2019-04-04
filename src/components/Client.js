import React, {Component} from 'react';
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
        this.updateInput=this.updateClient.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    updateClient= (event) =>{
        this.setState({
            name:event.target.value
        });
        this.props.updateClient(this.state.name);
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
            <Container>
                <form onSubmit={this.handleSubmit}>
                    <h4>Ingresar nombre Cliente</h4>
                    <input
                        type="text"
                        name="name"
                        placeholder="Nombre cliente"
                        value={this.state.name}
                    />
                    <input type="submit" onClick= {this.updateClient}/>
                </form>
                <h5>{showClient}</h5> 
            </Container>
        )
    }
}

export default Client ;

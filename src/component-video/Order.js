import React , {Component} from 'react';
import db from './Fire';

class Order extends Component{
    state = {
            order:[]
        }
    componentDidMount(){
        db.collection('cliente').get().then((snapShots)=>{
            this.setState({
                order: snapShots.docs.map(doc =>{
                    console.log(doc.data());
                })
            })
        })
    }
    render(){
        return(
            <div className="order-client">

            </div>
        )
    }

}

export default Order;
import React, {Component} from 'react';
import fire from './Fire';
import ShowMenu from '../components/ShowMenu';

class Home extends Component {
    constructor(props){
        super(props);
        this.logout = this.logout.bind(this);
    }

    logout(){
        fire.auth().signOut();
    }

    render(){
        return(
            <div className="col-md-6">
                <ShowMenu />
                <button onClick={this.logout}>Log Out</button>
            </div>
        );
    }
}
export default Home;
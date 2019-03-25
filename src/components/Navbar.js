import React, {Component} from 'react';
import {Navbar} from 'react-bootstrap';
import 'typeface-roboto';
import logo from './logo.png'

class NavbarHeader extends Component{
    render(){
        return(
            <div>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />
                    {' Burguer Queen'}
                    </Navbar.Brand>
                </Navbar>
            </div>
        )
    }
}

export default NavbarHeader;
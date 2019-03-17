import React, {Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import 'typeface-roboto';
import logo from './logo.png'

class NavbarHeader extends Component{
    render(){
        return(
            <div>
                <AppBar position="static">
                    <Toolbar>
                        <img src={logo} alt="logo" height="30" width="30" />
                        <Typography variant="tittle" color="inherit">
                            {"Burguer Queen"}
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}

export default NavbarHeader;
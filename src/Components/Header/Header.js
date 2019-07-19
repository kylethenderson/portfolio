import React, { Component } from 'react'
import Icon from '@material-ui/core/Icon'
import Grid from '@material-ui/core/Grid'
import Drawer from '@material-ui/core/Drawer'
import { Link } from 'react-router-dom'

import './Header.css'

class Header extends Component {
    
    state = {
        drawerOpen: false,
    }

    toggleDrawer = () => {
        this.setState({
            drawerOpen: !this.state.drawerOpen,
        })
    }

    render() {
        return (
            <div id="header">
                <Grid container justify="flex-end">
                    <Grid item xs={1} className="grid-item-text-center">
                        <Icon className={this.state.drawerOpen ? 'hidden' : ''} onClick={this.toggleDrawer}>menu</Icon>
                    </Grid>
                </Grid>
                <Drawer anchor="top" open={this.state.drawerOpen} onClose={this.toggleDrawer}>
                    <Link to=''>
                        Projects
                    </Link>
                    <Link to=''>
                        Contact
                    </Link>
                    <Link to=''>
                        Blog
                    </Link>
                </Drawer>
            </div>
        )
    }
}

export default Header
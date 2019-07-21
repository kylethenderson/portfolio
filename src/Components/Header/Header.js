import React, { Component } from 'react'
import Icon from '@material-ui/core/Icon'
import Grid from '@material-ui/core/Grid'
import Drawer from '@material-ui/core/Drawer'
import { Link, animateScroll as scroll } from 'react-scroll';

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

    scrollToTop = () => {
        scroll.scrollToTop();
    }

    render() {
        return (
            <div id="header">
                <Grid container justify="flex-end">
                    <Grid item xs={1} className="grid-item-text-center">
                        <Icon id="menuIcon" className={this.state.drawerOpen ? 'hidden' : ''} onClick={this.toggleDrawer}>menu</Icon>
                    </Grid>
                </Grid>
                <Drawer anchor="top" open={this.state.drawerOpen} onClose={this.toggleDrawer}>
                    <Link onClick={() => this.setState({ ...this.state, drawerOpen: !this.state.drawerOpen })} activeClass="active" to="projects" spy={true} smooth={true} offset={0} duration={750} onSetActive={this.handleSetActive}>
                        Projects
                    </Link>
                    <Link onClick={() => this.setState({ ...this.state, drawerOpen: !this.state.drawerOpen })} activeClass="active" to="skills" spy={true} smooth={true} offset={75} duration={1000} onSetActive={this.handleSetActive}>
                        Skills
                    </Link>
                    <Link onClick={() => this.setState({ ...this.state, drawerOpen: !this.state.drawerOpen })} activeClass="active" to="contact" spy={true} smooth={true} offset={75} duration={1250} onSetActive={this.handleSetActive}>
                        Contact
                    </Link>
                </Drawer>
            </div>
        )
    }
}

export default Header
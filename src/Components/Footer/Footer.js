import React, { Component } from 'react'

import './Footer.css'

// material ui components
import Grid from '@material-ui/core/Grid'
// import Icon from '@material-ui/core/Icon'

class Footer extends Component {
    render() {
        return (
            <Grid container justify="space-between" alignItems="center" id="footer">
                <Grid item xs={3}>
                    <h4>
                        Kyle Henderson
                    </h4>
                </Grid>
                <Grid item xs={3} className="grid-item-text-right">
                    <h4>
                        &copy; 2019
                    </h4>
                </Grid>
            </Grid>
        )
    }
}

export default Footer
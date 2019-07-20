import React, { Component } from 'react'

// material ui components
import Grid from '@material-ui/core/Grid'

import './Contact.css'

class Contact extends Component {
    render() {
        return (
            <>
            <Grid container justify="center" id="contact">
                <Grid item xs={4} className="grid-item-text-center">
                    <h1 className="grid-item-text-center">
                        Contact Page
                    </h1>
                    <br/>
                    <p>
                        Don't hesitate to contact me
                    </p>
                </Grid>
            </Grid>
            <Grid container justify="center">
                <Grid item xs={6}>
                    Input form
                </Grid>
            </Grid>
            </>
        )
    }
}

export default Contact
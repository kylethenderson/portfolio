import React, { Component } from 'react'
import axios from 'axios'

// material ui components
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

import './Contact.css'

class Contact extends Component {

    state = {
        name: '',
        email: '',
        subject: '',
        message: '',
    }

    handleChange = (event) => {
        this.setState({
            ...this.state, [event.target.id]: event.target.value,
        })
    }

    sendEmail = () => {
        // send message function here.
        console.log(this.state);
        this.setState({
            name: '',
            email: '',
            subject: '',
            message: '',
        })
    }

    render() {
        return (
            <div id="contact">
                <Grid container justify="center" id="contact">
                    <Grid item xs={8} className="grid-item-text-center">
                        <h1 className="grid-item-text-center">
                            Contact Me
                    </h1>
                    </Grid>
                </Grid>
                <Grid container justify="center">
                    <Grid item xs={12} sm={9} md={6} container justify="center" id="inputWrapper">
                        <Grid item xs={12} className="grid-item-text-center">
                            <p>
                                I'm happy to answer any questions or inquiries
                            </p>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                id="name"
                                label="Name"
                                type="text"
                                value={this.state.name}
                                onChange={this.handleChange}
                                margin="normal"
                                fullWidth
                                autoComplete="off"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                id="email"
                                type="email"
                                label="Email"
                                value={this.state.email}
                                onChange={this.handleChange}
                                margin="normal"
                                fullWidth
                                autoComplete="off"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                id="subject"
                                type="text"
                                label="Subject"
                                value={this.state.subject}
                                onChange={this.handleChange}
                                margin="normal"
                                fullWidth
                                autoComplete="off"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                id="message"
                                type="text"
                                label="Message"
                                value={this.state.message}
                                onChange={this.handleChange}
                                margin="normal"
                                fullWidth
                                autoComplete="off"
                                multiline
                                rows="6"
                            />
                        </Grid>
                        <Grid item xs={12} className="grid-item-text-center">
                            <Button variant="outlined" size="large" onClick={this.sendEmail}>Send it</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default Contact
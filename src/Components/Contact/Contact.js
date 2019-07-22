import React, { Component } from 'react'
import axios from 'axios'

import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

// material ui components
import Icon from '@material-ui/core/Icon'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'

import './Contact.css'

class Contact extends Component {

    state = {
        messageContent: {
            name: '',
            email: '',
            subject: '',
            message: '',
        },
        success: false,
        error: false,
    }

    handleChange = (event) => {
        this.setState({
            ...this.state, messageContent: {
                ...this.state.messageContent, [event.target.id]: event.target.value
            }
        })
    }

    toggleDialog = (dialog) => {
        this.setState({
            ...this.state, [dialog]: !this.state[dialog],
        })
    }

    sendEmail = () => {
        // send message function here.
        if (Object.keys(this.state.messageContent).every(key => this.state.messageContent[key] !== '')) {
            axios.post('/api/contact', this.state.messageContent)
                .then(response => {
                    this.toggleDialog('success');
                    this.setState({
                        ...this.state,
                        messageContent: {
                            name: '',
                            email: '',
                            subject: '',
                            message: '',
                        },
                    })
                })
                .catch(error => {
                    console.log('There was an issue.', error);
                })
        }
        else {
            this.toggleDialog('error');
        }
    }

    render() {
        return (
            <>
                <div id="contact">
                    <Grid container justify="center">
                        <Grid item xs={8} className="grid-item-text-center">
                            <h1 className="grid-item-text-center">
                                Contact Me
                            </h1>
                        </Grid>
                    </Grid>
                    <ScrollAnimation animateIn="fadeIn">
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
                                        value={this.state.messageContent.name}
                                        onChange={this.handleChange}
                                        margin="normal"
                                        fullWidth
                                        autoComplete="off"
                                        required
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        id="email"
                                        type="email"
                                        label="Email"
                                        value={this.state.messageContent.email}
                                        onChange={this.handleChange}
                                        margin="normal"
                                        fullWidth
                                        autoComplete="off"
                                        required
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        id="subject"
                                        type="text"
                                        label="Subject"
                                        value={this.state.messageContent.subject}
                                        onChange={this.handleChange}
                                        margin="normal"
                                        fullWidth
                                        autoComplete="off"
                                        required
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        id="message"
                                        type="text"
                                        label="Message"
                                        value={this.state.messageContent.message}
                                        onChange={this.handleChange}
                                        margin="normal"
                                        fullWidth
                                        autoComplete="off"
                                        multiline
                                        rows="6"
                                        required
                                    />
                                </Grid>
                                <Grid item xs={12} className="grid-item-text-center">
                                    <Button variant="outlined" size="large" onClick={this.sendEmail}>Send it</Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </ScrollAnimation>
                </div>
                <Dialog className="contactDialog" open={this.state.success} onClose={() => this.toggleDialog('success')}>
                    <Grid container justify="center">
                        <Grid item xs={12} className="grid-item-text-center">
                            <h4>Woo-hoo!</h4>
                            <Icon className="contactDialogCloseIcon" onClick={() => this.toggleDialog('success')}>close</Icon>
                        </Grid>
                        <Grid item xs={9} className="grid-item-text-center">
                            <p>Thank you for your interest.</p>
                            <p>I'll get back with you soon!</p>
                        </Grid>
                    </Grid>
                </Dialog>
                <Dialog className="contactDialog" open={this.state.error} onClose={() => this.toggleDialog('error')}>
                    <Grid container justify="center">
                        <Grid item xs={11} className="grid-item-text-center">
                            <h4>Oh No!</h4>
                            <Icon className="contactDialogCloseIcon" onClick={() => this.toggleDialog('error')}>close</Icon>
                        </Grid>
                        <Grid item xs={9} className="grid-item-text-center">
                            <p>Something's amiss.</p>
                            <p>Be sure to fill out all the fields.</p>
                        </Grid>
                    </Grid>
                </Dialog>
            </>
        )
    }
}

export default Contact
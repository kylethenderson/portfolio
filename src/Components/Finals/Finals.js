import React, { Component } from 'react'

import Grid from '@material-ui/core/Grid'
import Icon from '@material-ui/core/Icon'

import './Finals.css'

import ScrollAnimation from 'react-animate-on-scroll';

// import svg images
import Github from '../../assets/github.svg'
import Linkedin from '../../assets/linkedin.svg'

import Resume from '../../assets/Resume.pdf'
// import Headshot from '../../assets/headshot.png'
import HeadshotColor from '../../assets/headshot_color.jpg'

class Finals extends Component {
    render() {
        return (
            <div id="contact">
                <ScrollAnimation animateIn="fadeIn">
                    <Grid container justify="center" id="getInTouch">
                        <Grid item xs={9}>
                            <h2>Get in touch</h2>
                        </Grid>
                        <Grid item xs={9}>
                            <p>
                                Feel free to contact me via email or any of the social links below
                        </p>
                        </Grid>
                    </Grid>
                    <Grid container justify="center" id="finals" style={{ minHeight: '50vh' }} alignItems="center">
                        <Grid item xs={12} md={4} className="grid-item-text-center">
                            <img src={HeadshotColor} alt="headshot" />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <div>
                                <Icon style={{ marginRight: '18px' }}>home</Icon>
                                <p>Minneapolis, MN</p>
                            </div>
                            {/* <div style={{ marginBottom: '10px' }}>
                        <Icon style={{ marginRight: '18px' }}>phone</Icon><a href="https://linkedin.com/in/kylethenderson/"></a>
                    </div> */}
                            <div>
                                <a href="href=mailto:kylethenderson@gmail.com">
                                    <Icon style={{ marginRight: '18px' }}>mail</Icon>
                                    <p>Email me</p>
                                </a>
                            </div>
                            <div>
                                <a href="https://github.com/kylethenderson">
                                    <img alt="github logo" className="social-link" src={Github} />
                                    <p>github.com/kylethenderson</p>
                                </a>
                            </div>
                            <div>
                                <a href="https://linkedin.com/in/kylethenderson/">
                                    <img alt="linked in logo" className="social-link" src={Linkedin} />
                                    <p>linkedin.com/in/kylethenderson</p>
                                </a>
                            </div>
                            <div>
                                <a href={Resume}>
                                    <Icon style={{ marginRight: '18px' }}>insert_drive_file</Icon>
                                    <p>Resume</p>
                                </a>
                            </div>
                        </Grid>
                    </Grid>
                </ScrollAnimation>
            </div>
        )
    }
}

export default Finals
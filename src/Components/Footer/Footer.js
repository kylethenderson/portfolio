import React, { Component } from 'react'
import Icon from '@material-ui/core/Icon'
import Tooltip from '@material-ui/core/Tooltip'

import './Footer.css'

// import svg images
import Github from '../../assets/github.svg'
import Linkedin from '../../assets/linkedin.svg'

import Resume from '../../assets/Resume.pdf'

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
                <Grid item xs={6} className="grid-item-text-center">
                    <Tooltip title="Github">
                    <a href="https://github.com/kylethenderson"><img alt="github logo" className="social-link" src={Github} /></a>
                    </Tooltip>
                    <Tooltip title="LinkedIn">
                    <a href="https://linkedin.com/in/kylethenderson/"><img alt="linked in logo" className="social-link" src={Linkedin} /></a>
                    </Tooltip>
                    <Tooltip title="Resume">
                        <a href={Resume}><Icon>insert_drive_file</Icon></a>
                    </Tooltip>
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
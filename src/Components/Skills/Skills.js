import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'

import './Skills.css'

class Skills extends Component {
    render () {
        return (
            <div id="skills">
                <Grid container justify="center">
                    <Grid item xs={6} className="grid-item-text-center">
                        <h1>Skills</h1>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default Skills
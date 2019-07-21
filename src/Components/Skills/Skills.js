import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import Chip from '@material-ui/core/Chip'

import './Skills.css'

class Skills extends Component {

    state = {
        skills: [
                "JavaScript","HTML","CSS","React","Redux","Material UI",
                "Node.js","Express","PostgreSQL","Vue.js","Vuex","Vuetify",
                "Bootstrap", "MongoDB"
            ]
    }
    render() {
        return (
            <div id="skills">
                <Grid container justify="center">
                    <Grid item xs={6} className="grid-item-text-center">
                        <h1>Skills</h1>
                    </Grid>
                </Grid>
                <Grid container justify="center">
                    <Grid item xs={10} md={8} container justify="center">
                        { this.state.skills.map(skill => <Chip key={skill} variant="outlined" label={skill} />)}
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default Skills
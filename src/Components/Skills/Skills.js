import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import Chip from '@material-ui/core/Chip'

import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

import './Skills.css'

class Skills extends Component {

    state = {
        skills: [
            "JavaScript", "HTML", "CSS", "React", "Redux", "Material UI",
            "Node.js", "Express", "PostgreSQL", "Vue.js", "Vuex", "Vuetify",
            "Bootstrap", "MongoDB"
        ]
    }
    render() {
        return (
            <div id="skills">
                <ScrollAnimation animateIn="fadeIn">

                    <Grid style={{height: '80vh'}} container justify="center" alignItems="center">
                        <Grid item xs={12} container justify="center">
                            <Grid item xs={12} className="grid-item-text-center">
                                <h1>Skills</h1>
                            </Grid>
                            <Grid item xs={10} md={8} className="grid-item-text-center">
                                {this.state.skills.map(skill => <Chip key={skill} variant="outlined" label={skill} />)}
                            </Grid>
                        </Grid>
                    </Grid>
                </ScrollAnimation>
            </div>
        )
    }
}

export default Skills
import React, { Component } from 'react'
import ProjectItem from './ProjectItem'

// material ui components
import Grid from '@material-ui/core/Grid'

import './Projects.css'

class Projects extends Component {

    // object of all the project data
    state = {
        projects: [1, 2, 3, 4]
    }
    render() {
        return (
            <div id="projects">
                <Grid container justify="center">
                    <Grid item xs={6} className="grid-item-text-center">
                        <h1>Projects</h1>
                    </Grid>
                </Grid>
                {this.state.projects.map((project, index) => <ProjectItem key={project} index={index}/>)}
            </div>
        )
    }
}

export default Projects
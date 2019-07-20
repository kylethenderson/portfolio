import React, { Component } from 'react'
import ProjectItem from './ProjectItem'

// material ui components
import Grid from '@material-ui/core/Grid'

// import images
import CleanupMeetup from '../../assets/cleanupmeetup.png'
import KnightLogistics from '../../assets/knightlogistics.png'
import UKnighted from '../../assets/uknighted.png'
import SwiftLogistics from '../../assets/swiftlogistics.png'

import './Projects.css'

class Projects extends Component {

    // object of all the project data
    state = {
        projects: [
            {
                title: 'CleanUP MeetUP',
                shortDesc: 'Mobile first application designed to allow users the ability to mark littered areas and organize an effort to clean it up.',
                longDesc: `Deriving inspiration from the environmental idea to "Leave it better", 
                    I wanted to build an application that would encourage users to keep their local parks, trails, and communities clean. 
                    Users can see every area within the map view that has been marked as needing some TLC, as well as any
                    marked area where a MeetUP has been organized. Users can organize new meetups or join existing meetups
                    and come together with others in the community to clean it up.`,
                img: CleanupMeetup,
            },
            {
                title: 'Knight Logistics',
                shortDesc: 'short description',
                longDesc: 'long description',
                img: KnightLogistics,
            },
            {
                title: 'U-Knighted',
                shortDesc: 'short description',
                longDesc: 'long description',
                img: UKnighted,
            },
            {
                title: 'Swift Logistics',
                shortDesc: 'short description',
                longDesc: 'long description',
                img: SwiftLogistics,
            }
        ]
    }
    render() {
        return (
            <div id="projects">
                <Grid container justify="center">
                    <Grid item xs={6} className="grid-item-text-center">
                        <h1>Projects</h1>
                    </Grid>
                </Grid>
                {this.state.projects.map((project, index) => <ProjectItem key={index} project={project} index={index}/>)}
            </div>
        )
    }
}

export default Projects
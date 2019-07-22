import React, { Component } from 'react'
import ProjectItem from './ProjectItem'
import ScrollAnimation from 'react-animate-on-scroll';

import "animate.css/animate.min.css";

// material ui components
import Grid from '@material-ui/core/Grid'

// import images
// import CleanupMeetup from '../../assets/cleanupmeetup.png'
import KnightLogistics from '../../assets/knightlogistics.jpg'
import UKnighted from '../../assets/uknighted.png'
import SwiftLogistics from '../../assets/swiftlogistics.jpg'

import './Projects.css'

class Projects extends Component {

    // object of all the project data
    state = {
        projects: [
            {
                title: 'CleanUP MeetUP',
                shortDesc: `Deriving inspiration from the idea to "Leave it better", 
                    CleanUp MeetUp is a mobile first application that gives users the ability to mark littered areas
                    and organize an effort to clean it up.`,
                longDesc: `A major frustration of mine is seeing trash and debris thrown on the ground, especially at parks, on trails, or around our waterways.
                    I wanted to build an application that would let users mark areas on a map that need some TLC, and which would encourage people clean up those areas.
                    The front end of this application is built with React, Redux, Material-UI, and utilizes the GoogleMaps API. Its powered by a Node.js and Express server that
                    is connected to a PostgreSQL database.`,
                img: 'https://media.giphy.com/media/f4DjVWqj6HaRIXgWQD/giphy.gif',
                url: 'https://cleanup-meetup.herokuapp.com',
            },
            {
                title: 'Knight Logistics',
                shortDesc: 'Knight Logistics is a logistics broker servicing customers nationwide in search of a greater web presence and brand awareness.',
                longDesc: `Beginning with an initial concept for the direction of the site, I redesigned the Knight Logistics website from the ground up.
                    The site is built in HTML, CSS, JavaScript, jQuery, and Bootstrap 4 for a clean, responsive UI. Site forms are tied to
                    a RESTful api built with Node.js and Express.`,
                img: KnightLogistics,
                url: 'http://knightlogistics.com',
            },
            {
                title: 'Feedback Form',
                shortDesc: 'We want to know how you are feeling today.',
                longDesc: `A feedback form to let us know how you are feeling today. Front end built with React, Redux, and Material UI. Server side build on Node.js and Express
                    connected to a PostgreSQL database.`,
                img: 'https://media.giphy.com/media/iJDv9aD3GRCMij0Kkq/giphy.gif',
                url: null,
            },
            {
                title: 'Swift Logistics',
                shortDesc: 'Swift Logistics is a logistics broker servicing customers nationwide in search of a greater web presence and brand awareness.',
                longDesc: `Beginning with an initial concept for the direction of the site, I built the Swift Logistics website from the ground up.
                    The site is built in HTML, CSS, JavaScript, jQuery, and Bootstrap 4 for a clean, responsive UI. Site forms are tied to
                    a RESTful api built with Node.js and Express.`,
                img: SwiftLogistics,
                url: 'http://swiftlogistics.com',
            },
            {
                title: 'Movie Magic',
                shortDesc: 'If I were to build an app that would list movies, a description, and their genres, what would that look like?',
                longDesc: `It would look something like this! Front end UI built with React, Redux, Redux-Sagas, and Material UI. Server
                    side functionality handled by an Express server built on Node.js all connected to a PostgreSQL database to handle all the deets.`,
                img: 'https://media.giphy.com/media/QxZGLQWO03Quml8Srz/giphy.gif',
                url: null,
            },
            {
                title: 'U-Knighted',
                shortDesc: 'A benefits program tailored to solve concerns that truck owners face on a daily basis on the road.',
                longDesc: `In an effort to reduce waste, increase efficiencies, and consolidate workflow, I designed and built
                    a new web based solution for the U-Knighted program to reach truck owners quickly and easily. Built with
                    HTML, CSS, JavaScript, jQuery, and Bootstrap. Site forms are connected to a RESTful api built with Node.js and Express.`,
                img: UKnighted,
                url: null,
            },
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
                {this.state.projects.map((project, index) =>
                    <ScrollAnimation key={index} animateIn="fadeIn">
                        <ProjectItem project={project} index={index} />
                    </ScrollAnimation>
                )}
            </div>
        )
    }
}

export default Projects
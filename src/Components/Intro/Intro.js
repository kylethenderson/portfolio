import React, { Component } from 'react'

// material ui components
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'

// css
import './Intro.css'

class Intro extends Component {
    render() {
        return (
            <div id="intro">
                <Grid id="introGridWrapper" container justify="center" alignItems="center">
                    <Grid item xs={12} container justify="center">
                        <Grid item xs={12} className="grid-item-text-center">
                            <h1 id="name">Kyle Henderson</h1>
                        </Grid>
                        <Grid item xs={10} md={5} className="grid-item-text-center">
                            <h5 id="summary">
                            Tenacious and inquisitive full stack developer who finds motivation through building projects and discovering how things work.
                            Passionate about building solutions that move people and our planet forward. 
                            </h5>
                        </Grid>
                        <Grid item xs={12} className="grid-item-text-center">
                            <Button variant="outlined">Projects</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default Intro
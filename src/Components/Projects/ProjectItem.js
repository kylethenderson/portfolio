import React, { Component } from 'react'

// material ui components 
import Grid from '@material-ui/core/Grid'

class ProjectItem extends Component {

    state = {
        mainInfo: true,
        even: null,
    }

    componentDidMount() {
        if (this.props.index % 2 === 0) {
            this.setState({
                ...this.state, even: true,
            })
        } else {
            this.setState({
                ...this.state, even: false,
            })
        }
    }
    render() {
        return (
            <Grid container justify="center" className="individual-project">
                {this.state.even ?
                    <>
                        <Grid item xs={5} md={4} className="left-project-item">
                            <p>
                                project image here {this.props.index + 1}
                            </p>
                        </Grid>
                        <Grid onClick={() => this.setState({ mainInfo: !this.state.mainInfo })} item xs={7} md={5} className="right-project-item toggleable">
                            {
                                this.state.mainInfo ?
                                    <p>
                                        project title and brief description here.
                        </p>
                                    :
                                    <p>
                                        longer description
                        </p>
                            }

                        </Grid>
                    </>
                    :
                    <>
                        <Grid onClick={() => this.setState({ mainInfo: !this.state.mainInfo })} item xs={7} md={5} className="right-project-item toggleable">
                            {
                                this.state.mainInfo ?
                                    <p>
                                        project title and brief description here.
                        </p>
                                    :
                                    <p>
                                        longer description
                        </p>
                            }

                        </Grid>
                        <Grid item xs={5} md={4} className="left-project-item">
                            <p>
                                project image here {this.props.index + 1}
                            </p>
                        </Grid>
                    </>
                }


            </Grid>
        )
    }
}

export default ProjectItem
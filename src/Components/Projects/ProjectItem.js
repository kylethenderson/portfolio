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
            <>
                <Grid container justify="center" className="individual-project">
                    {this.state.even &&
                        <Grid item xs={5} md={3} className="project-item grid-item-text-center">
                            <img src={this.props.project.img} alt="Cleanup Meetup screenshot" />
                        </Grid>
                    }
                    <Grid onClick={() => this.setState({ mainInfo: !this.state.mainInfo })} item xs={7} md={4} className={!this.state.even ? 'project-item toggleable grid-item-text-right' : 'project-item toggleable'}>
                        {
                            this.state.mainInfo ?
                                <>
                                    <h3>
                                        {this.props.project.title}
                                    </h3>
                                    <p>
                                        {this.props.project.shortDesc}
                                    </p>
                                </>
                                :
                                <p>
                                    {this.props.project.longDesc}
                                    <br />
                                    <br />
                                    <a href="cleanup-meetup.herokuapp.com">View</a>
                                </p>
                        }
                    </Grid>
                    {!this.state.even &&
                        <Grid item xs={5} md={4} className="project-item grid-item-text-center">
                            <img src={this.props.project.img} alt="Cleanup Meetup screenshot" />
                        </Grid>
                    }
                </Grid>
            </>
        )
    }
}

export default ProjectItem
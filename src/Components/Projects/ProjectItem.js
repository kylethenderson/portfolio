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
                        <Grid item xs={12} md={4} className="project-item grid-item-text-center">
                            <img src={this.props.project.img} alt="Cleanup Meetup screenshot" />
                        </Grid>
                    }
                    <Grid onClick={() => this.setState({ mainInfo: !this.state.mainInfo })} item xs={12} md={4} className='project-item toggleable'>
                        <div className={this.state.mainInfo ? 'item-description' : 'item-description hidden'}>
                            <h3>
                                {this.props.project.title}
                            </h3>
                            <p>
                                {this.props.project.shortDesc}
                            </p>
                        </div>
                        <div className={this.state.mainInfo ? 'item-description hidden' : 'item-description'}>
                            <p>
                                {this.props.project.longDesc}
                                <br />
                                <br />
                                <a href="cleanup-meetup.herokuapp.com">View</a>
                            </p>
                        </div>
                    </Grid>
                    {!this.state.even &&
                        <Grid item xs={12} md={4} className="project-item grid-item-text-center">
                            <img src={this.props.project.img} alt="Cleanup Meetup screenshot" />
                        </Grid>
                    }
                </Grid>
            </>
        )
    }
}

export default ProjectItem
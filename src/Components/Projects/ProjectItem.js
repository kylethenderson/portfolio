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
                <Grid className={this.state.even ? 'individual-project even' : 'individual-project odd'} container justify="center">
                    {this.state.even &&
                        <Grid item xs={12} md={4} className="project-item grid-item-text-center">
                            <img src={this.props.project.img} alt={this.props.project.title} />
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
                            <span>Details...</span>
                            <p>
                                {this.props.project.url &&
                                    <a href={this.props.project.url}>View</a>
                                }
                            </p>
                        </div>
                        <div className={this.state.mainInfo ? 'item-description hidden' : 'item-description'}>
                            <p>
                                {this.props.project.longDesc}
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
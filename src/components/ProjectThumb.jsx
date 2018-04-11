import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/ProjectThumb.css';


class ProjectThumb extends Component {
    render() {
        return (
            <div className="mg-project-thumb">
                <Link to={this.props.linkTo}>
                    <img src={this.props.src} alt={'image for ' + this.props.projectName} />
                </Link>
                <Link to={this.props.linkTo}>
                    {this.props.projectName}
                </Link>
            </div>
        );
    }
}

export default ProjectThumb;

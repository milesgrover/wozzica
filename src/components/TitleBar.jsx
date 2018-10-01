import React, { Component } from 'react';
import '../styles/TitleBar.css';

class TitleBar extends Component {
    render() {
        return (
            <div className={`wozz-title-bar${this.props.withdraw ? ' withdraw' : ''}`}>
                <h1>{this.props.title}</h1>
            </div>
        )
    }
}

export default TitleBar;

import React, { Component } from 'react';
import '../styles/TitleBar.css';

class TitleBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="wozz-title-bar">
                <h1>{this.props.title}</h1>
            </div>
        )
    }
}

export default TitleBar;

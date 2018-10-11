import React, { Component } from 'react';
import '../styles/TitleBar.css';

class TitleBar extends Component {
    render() {
        return (
            <header className="wozz-title-bar">
                <h1 className="heading-page-title">{this.props.title}</h1>
            </header>
        )
    }
}

export default TitleBar;

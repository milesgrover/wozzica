import React, { Component } from 'react';
import '../styles/TitleBar.css';

class TitleBar extends Component {
    generateClassName = () => {
        let base = ['wozz-title-bar'];
        if (this.props.out) {
            base.push('anim-out');
        }
        return base.join(' ');
    }

    render() {
        return (
            <header className={this.generateClassName()}>
                <h1 className="heading-page-title">{this.props.title}</h1>
            </header>
        )
    }
}

export default TitleBar;

import React, { Component } from 'react';
import classNames from '../utilities/classNames';
import '../styles/BigButton.scss';

class BigButton extends Component {
    render() {
        return (
            <button
                onClick={this.props.onClick}
                className={classNames('wozz-big-btn', this.props.next ? 'next' : null)}
                disabled={this.props.disabled}>
                    <span>{this.props.children}</span>
            </button>
        )
    }
}

export default BigButton;

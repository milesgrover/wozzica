import React, { Component } from 'react';
import TriangleSvg from '../images/triangle.svg'
// import '../styles/Triangle.css';

class Triangle extends Component {
    render() {
        let leftFill = this.props.fill;
        let rightFill = this.props.fill;
        let leftShadow = this.props.shadow;
        let rightShadow = this.props.shadow;
        if (this.props.left) {
            leftFill = 'transparent';
            leftShadow = 'transparent';
        }
        if (this.props.right) {
            rightFill = 'transparent';
            rightShadow = 'transparent';
        }
        let className = this.props.className;
        if (this.props.top) {
            className += ' top'
            rightShadow = 'transparent';
            leftShadow = 'transparent';
        }

        return (
            <div style={this.props.style} className={className}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 18">
                    <polygon fill={leftShadow} points="14,18 14,0 0.6,0"/>
                    <polygon fill={rightShadow} points="14,18 14,0 27.4,0"/>
                    <polygon fill={leftFill} points="14,14.7 14,0 3,0"/>
                    <polygon fill={rightFill} points="14,14.7 14,0 25,0"/>
                </svg>
            </div>
        )
    }
}

export default Triangle;

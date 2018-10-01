import React, { Component } from 'react';
import '../styles/AnnotateDot.css';

class AnnotateDot extends Component {
    render() {
        const positionStyle = {
            top: this.props.coords.y - 2,
            left: this.props.coords.x - 2
        }
        return <div className="annotation-dot" style={positionStyle}></div>
    }
}

export default AnnotateDot;

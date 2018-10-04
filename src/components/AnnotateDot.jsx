import React, { Component } from 'react';
import '../styles/AnnotateDot.css';

class AnnotateDot extends Component {
    handleDotClick = (e) => {
        e.stopPropagation();
        this.props.onClickDot(this.props.index)
    }

    render() {
        const positionStyle = {
            top: this.props.coords.y - 2,
            left: this.props.coords.x - 2
        }
        return (
            <div className="annotation-dot"
                    style={positionStyle}
                    onClick={this.handleDotClick}
                    >
            </div>
        )
    }
}

export default AnnotateDot;

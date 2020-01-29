import React, { Component } from 'react';
import './AnnotateDot.scss';

class AnnotateDot extends Component {
    handleDotClick = (e) => {
        e.stopPropagation();
        this.props.onClickDot(this.props.data.uid)
    }

    render() {
        const positionStyle = {
            top: this.props.data.dy - 2,
            left: this.props.data.dx - 2
        }
        return (
            <div className="annotation-dot"
                    style={positionStyle}
                    onClick={this.handleDotClick}
                    data-uid={this.props.data.uid}
                    >
            </div>
        )
    }
}

export default AnnotateDot;

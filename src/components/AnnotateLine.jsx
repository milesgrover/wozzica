import React, { Component } from 'react';
import '../styles/AnnotateLine.css';

class AnnotateLine extends Component {
    constructor(props) {
        super(props);

        this.canvas = React.createRef();
    }

    componentDidMount = () => {
        this.updateCanvas();
    }

    componentDidUpdate = () => {
        this.updateCanvas();
    }

    updateCanvas = () => {
        const canvas = this.canvas.current;

        const dotX = this.props.dotCoords.x + 1;
        const dotY = this.props.dotCoords.y + 1;
        const labelY = this.props.labelCoords.y + this.props.labelDimensions.h / 2;
        const labelX = this.props.labelCoords.x - this.props.labelDimensions.w / 2;

        const lineCtx = canvas.getContext('2d');
        lineCtx.clearRect(0, 0, lineCtx.canvas.width, lineCtx.canvas.height);
        lineCtx.beginPath();
        lineCtx.moveTo(dotX, dotY);
        lineCtx.lineTo(labelX, labelY);
        lineCtx.lineWidth = 7;
        lineCtx.strokeStyle = '#FFFFFF';
        lineCtx.stroke();
        lineCtx.lineWidth = 3;
        lineCtx.strokeStyle = '#000000';
        lineCtx.stroke();
    }

    render() {
        return (
            <canvas className="annotation-line"
                    width={this.props.imgSize.w}
                    height={this.props.imgSize.h}
                    ref={this.canvas}>
            </canvas>
        )
    }
}

export default AnnotateLine;

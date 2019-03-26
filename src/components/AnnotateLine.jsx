import React, { Component } from 'react';
import '../styles/AnnotateLine.scss';

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

        const dotX = this.props.data.dx + 1;
        const dotY = this.props.data.dy + 1;
        const labelY = this.props.data.ly + this.props.data.lh / 2;
        const labelX = this.props.data.lx - this.props.data.lw / 2;

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

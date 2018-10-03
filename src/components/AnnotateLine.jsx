import React, { Component } from 'react';
import '../styles/AnnotateLine.css';

const lineDrawWidth = 7;

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
        const labelX = this.props.labelCoords.x - this.props.labelDimensions.w / 2;
        const labelY = this.props.labelCoords.y + this.props.labelDimensions.h / 2;

        const lineLeft = Math.min(dotX, labelX);
        const lineTop = Math.min(dotY, labelY);
        const lineRight = Math.max(dotX, labelX);
        const lineBottom = Math.max(dotY, labelY);
        // const lineBoxHeight = lineBottom - lineTop + lineDrawWidth;
        const lineBoxHeight = Math.max(lineBottom - lineTop, lineDrawWidth);
        // const lineBoxWidth = lineRight - lineLeft + lineDrawWidth;
        const lineBoxWidth = Math.max(lineRight - lineLeft, lineDrawWidth);
        const lineStyle = {
            top: lineTop + 'px',
            left: lineLeft + 'px'
        }

        // determine whether the dot (start) is top, right, bottom, or left
        if (dotX < labelX) {
            // label to the right of dot
        }
        let startX = dotX < labelX ? 0 : lineBoxWidth;
        let endX = dotX >= labelX ? 0 : lineBoxWidth;
        let startY = dotY < labelY ? 0 : lineBoxHeight + lineDrawWidth / 2;
        let endY = dotY >= labelY ? 0 : lineBoxHeight + lineDrawWidth / 2;

        canvas.setAttribute('width', lineBoxWidth);
        canvas.setAttribute('height', lineBoxHeight);
        canvas.style.top = lineStyle.top;
        canvas.style.left = lineStyle.left;

        console.log(`startX: ${startX}`)
        console.log(`startY: ${startY}`)
        console.log(`endX: ${endX}`)
        console.log(`endY: ${endY}`)

        const lineCtx = canvas.getContext('2d');
        lineCtx.beginPath();
        lineCtx.moveTo(startX, startY);
        lineCtx.lineTo(endX, endY);
        lineCtx.lineWidth = lineDrawWidth;
        lineCtx.strokeStyle = '#FFFFFF';
        lineCtx.stroke();
        lineCtx.lineWidth = Math.floor(lineDrawWidth / 2);
        lineCtx.strokeStyle = '#000000';
        lineCtx.stroke();
    }

    render() {
        return (
            <canvas className="annotation-line"
                    ref={this.canvas}>
            </canvas>
        )
    }
}

export default AnnotateLine;

import React, { Component } from 'react';
import '../styles/AnnotateLine.css';

const canvAdjust = 10;

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

        const lineTop = Math.min(dotY, labelY);
        const lineLeft = Math.min(dotX, labelX);
        const lineRight = Math.max(dotX, labelX);
        const lineBottom = Math.max(dotY, labelY);
        const lineBoxHeight = lineBottom - lineTop;
        const lineBoxWidth = lineRight - lineLeft;

        let startX, startY, endX, endY, positionTop, positionLeft;
        if (dotY < labelY && dotX < labelX) {
            console.log('bottom right');
            startY = 0;
            endY = lineBoxHeight + canvAdjust / 2;
            startX = 0;
            endX = lineBoxWidth + canvAdjust / 2;
            positionTop = lineTop - canvAdjust / 2;
            positionLeft = lineLeft - canvAdjust / 2;
        } else if (dotY < labelY && labelX < dotX){
            console.log('bottom left');
            startY = -canvAdjust / 2;
            endY = lineBoxHeight + canvAdjust / 2;
            startX = lineBoxWidth + canvAdjust / 2;
            endX = -canvAdjust / 2;
            positionTop = lineTop + canvAdjust / 2;
            positionLeft = lineLeft - canvAdjust / 2;
        } else if (labelY < dotY && dotX < labelX) {
            console.log('top right');
            startY = lineBoxHeight + canvAdjust / 2;
            endY = -canvAdjust / 2;
            startX = -canvAdjust / 2;
            endX = lineBoxWidth + canvAdjust / 2;
            positionTop = lineTop - canvAdjust / 2;
            positionLeft = lineLeft + canvAdjust / 2;
        } else if (labelY < dotY && labelX < dotX) {
            console.log('top left');
            startY = lineBoxHeight + canvAdjust / 2;
            endY = -canvAdjust / 2;
            startX = lineBoxWidth + canvAdjust / 2;
            endX = -canvAdjust / 2;
            positionTop = lineTop - canvAdjust / 2;
            positionLeft = lineLeft - canvAdjust / 2;
        }
        // if (dotX < labelX) {
        //     startX = -canvAdjust / 2;
        //     endX = lineBoxWidth + canvAdjust / 2;
        // } else {
        //     startX = lineBoxWidth + canvAdjust / 2;
        //     endX = -canvAdjust / 2;
        // }

        const lineBoxStyle = {
            top: positionTop + 'px',
            left: positionLeft + 'px'
        }

        canvas.setAttribute('width', lineBoxWidth + canvAdjust);
        canvas.setAttribute('height', lineBoxHeight + canvAdjust);
        canvas.style.top = lineBoxStyle.top;
        canvas.style.left = lineBoxStyle.left;

        // console.log(`startX: ${startX}`)
        // console.log(`startY: ${startY}`)
        // console.log(`endX: ${endX}`)
        // console.log(`endY: ${endY}`)

        const lineCtx = canvas.getContext('2d');
        lineCtx.beginPath();
        lineCtx.moveTo(startX, startY);
        lineCtx.lineTo(endX, endY);
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
                    ref={this.canvas}>
            </canvas>
        )
    }
}

export default AnnotateLine;

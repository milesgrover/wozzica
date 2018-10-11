import React, { Component, Fragment } from 'react';
import Triangle from './Triangle';
import '../styles/AnnotateModal.css';

class AnnotateModal extends Component {
    componentDidMount = () => {
        this.InputBox.focus();
    }

    handleBtnClick = (e) => {
        e.preventDefault();
        if (this.InputBox.value) {
            this.props.onAddLabel(this.InputBox.value, this.props.uid)
        }
    }

    render() {
        const positionStyle = {
            top: this.props.position.y,
            left: this.props.position.x
        }
        const tailPositionStyle = {
            top: this.props.position.tailCoords.dy,
            left: this.props.position.tailCoords.dx
        }

        return (
            <Fragment>
                <div className="annotation-modal" style={positionStyle}>
                    <button className="close-btn" onClick={this.props.onClose}><span>close</span></button>
                    <h6 className="heading">What's this thing called?</h6>
                    <form>
                        <input type="text" pattern="[\w\s',]+" placeholder="e.g. philtrum" ref={(el) => this.InputBox = el} />
                        <button className="submit-btn" onClick={this.handleBtnClick}><span>OK</span></button>
                    </form>
                </div>
                {/* TODO: consider how to avoid duplicating colors here with CSS */}
                <Triangle className="modal-tail"
                          fill="#ffe566"
                          shadow="#008e79"
                          left={this.props.position.tail.includes('left')}
                          right={this.props.position.tail.includes('right')}
                          top={this.props.position.tail.includes('top')}
                          style={tailPositionStyle} />
            </Fragment>
        )
    }
}

export default AnnotateModal;

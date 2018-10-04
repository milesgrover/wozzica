import React, { Component, Fragment } from 'react';
import '../styles/AnnotateModal.css';

class AnnotateModal extends Component {
    componentDidMount = () => {
        this.InputBox.focus();
    }

    handleBtnClick = (e) => {
        e.preventDefault();
        if (this.InputBox.value) {
            this.props.onAddLabel(this.InputBox.value, this.props.index)
        }
    }

    render() {
        const positionStyle = {
            top: this.props.position.y,
            left: this.props.position.x
        }
        const tailPositionStyle = {
            top: this.props.position.tailCoords.y,
            left: this.props.position.tailCoords.x
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
                <div className={`modal-tail${this.props.position.tail.length > 0 ?
                                ' ' + this.props.position.tail.join(' ') : ''}`}
                                style={tailPositionStyle}>
                </div>
            </Fragment>
        )
    }
}

export default AnnotateModal;

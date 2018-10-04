import React, { Component, Fragment } from 'react';
import '../styles/RemoveDotModal.css';

class RemoveDotModal extends Component {
    handleBtnClick = (e) => {
        e.preventDefault();

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
                <div className="remove-dot-modal" style={positionStyle}>
                    <h6 className="heading">Delete this thing?</h6>
                    <div className="btn-group">
                        <button className="proceed-btn" onClick={this.props.onProceed}><span>proceed</span></button>
                        <button className="cancel-btn" onClick={this.props.onCancel}><span>cancel</span></button>
                    </div>
                </div>
                <div className={`modal-tail${this.props.position.tail.length > 0 ?
                                ' ' + this.props.position.tail.join(' ') : ''}`}
                                style={tailPositionStyle}>
                </div>
            </Fragment>
        )
    }
}

export default RemoveDotModal;

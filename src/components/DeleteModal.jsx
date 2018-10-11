import React, { Component, Fragment } from 'react';
import Triangle from './Triangle';
import '../styles/DeleteModal.css';

class DeleteModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            confirming: false
        };
    }
    handleBtnClick = (e) => {
        e.preventDefault();
    }

    onProceed = () => {
        this.setState({
            confirming: true
        })
    }

    render() {
        const positionStyle = {
            top: this.props.position.y,
            left: this.props.position.x,
            width: this.props.position.w,
            height: this.props.position.h
        }
        const tailPositionStyle = {
            top: this.props.position.tailCoords.dy,
            left: this.props.position.tailCoords.dx
        }

        return (
            <Fragment>
                <div className={`delete-modal${this.props.confirming ? ' confirm' : ''}`} style={positionStyle}>
                    <div className={this.state.confirming ? 'delete-hide' : 'delete-show'}>
                        <h6 className="heading">DELETE this thing?</h6>
                        <button className="proceed-btn" onClick={this.onProceed} disabled={this.state.confirming}>Delete</button>
                        <button className="cancel-btn" onClick={this.props.onCancel} disabled={this.state.confirming}>Never mind</button>
                    </div>

                    <div className={this.state.confirming ? 'confirm-show' : 'confirm-hide'}>
                        <h6 className="heading">Are you SURE??</h6>
                        <button className="proceed-btn" onClick={this.props.onConfirm} disabled={!this.state.confirming}><span>Yes</span></button>
                        <button className="cancel-btn" onClick={this.props.onCancel} disabled={!this.state.confirming}><span>No, sorry</span></button>
                    </div>
                </div>
                {/* TODO: consider how to avoid duplicating colors here with CSS */}
                <Triangle className="modal-tail"
                          fill="#bf4747"
                          shadow="#80312d"
                          left={this.props.position.tail.includes('left')}
                          right={this.props.position.tail.includes('right')}
                          top={this.props.position.tail.includes('top')}
                          style={tailPositionStyle} />
            </Fragment>
        )
    }
}

export default DeleteModal;

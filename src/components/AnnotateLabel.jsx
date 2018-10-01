import React, { Component, Fragment } from 'react';
import '../styles/AnnotateLabel.css';

class AnnotateLabel extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dragging: false,
            editing: false
        }
    }

    handleEditClick = () => {
        if (!this.state.editing) {
            this.setState({
                editing: true
            });
        } else {
            if (this.editInput.value) {
                this.props.onUpdate(this.editInput.value)
            }
            this.setState({
                editing: false
            });
        }
    }

    handleCancelClick = () => {
        this.setState({
            editing: false
        });
    }

    handleInput = () => {
        if (this.editInput.value) {
            this.editInput.size = Math.max(this.editInput.value.length, 1);
        }
    }

    render() {
        const positionStyle = {
            top: this.props.top,
            left: this.props.left
        }
        return (
            <div className={`annotation-label${this.state.dragging ? ' is-dragging' : ''}${this.state.editing ? ' is-editing' : ''}`} style={positionStyle}>
                {!this.state.editing &&
                    <span>{this.props.label}</span>
                }
                <button className="label-dragger-btn"><span>drag</span></button>
                <button className="label-edit-btn"
                        onClick={this.handleEditClick}>
                            <span>edit</span>
                </button>
                {this.state.editing &&
                    <Fragment>
                        <button className="label-edit-cancel-btn"
                                onClick={this.handleCancelClick}>
                                    <span>cancel</span>
                        </button>
                        <input type="text"
                            className="label-editor"
                            size={this.props.label.length}
                            pattern="[\w\s',]+"
                            defaultValue={this.props.label}
                            ref={(el) => this.editInput = el}
                            autoFocus
                            onBlur={this.handleEditBlur}
                            onInput={this.handleInput}
                            />
                    </Fragment>
                }
            </div>
        )
    }
}

export default AnnotateLabel;

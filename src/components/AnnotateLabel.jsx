import React, { Component, Fragment } from 'react';
import '../styles/AnnotateLabel.css';

class AnnotateLabel extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dragging: false,
            editing: false
        }

        // refs
        this.componentElement = React.createRef();
        this.editInput = React.createRef();
        this.inputWidthCheck = React.createRef();
    }

    componentDidMount = () => {
        this.props.onUpdate(null, this.props.index,
            { w: this.componentElement.current.offsetWidth, h: this.componentElement.current.offsetHeight })
    }

    handleEditClick = (e) => {
        e.preventDefault();
        e.stopPropagation();

        if (!this.state.editing) {
            this.setState({
                editing: true
            });
        } else {
            if (this.editInput.current.value) {
                this.props.onUpdate(this.editInput.current.value, this.props.index,
                    { w: this.componentElement.current.offsetWidth, h: this.componentElement.current.offsetHeight })
            }
            this.setState({
                editing: false
            });
        }
    }

    handleCancelClick = (e) => {
        e.stopPropagation();

        this.setState({
            editing: false
        });
    }

    handleInput = () => {
        if (this.editInput.current.value) {
            this.inputWidthCheck.current.textContent = this.editInput.current.value;
            if (this.inputWidthCheck.current.offsetWidth + 16 < 256) {
                this.editInput.current.style.width = this.inputWidthCheck.current.offsetWidth + 16 + 'px';
            }
        }
    }

    handleDragOn = (e) => {
        e.stopPropagation();
        this.setState({
            dragging: true
        })
        this.props.onDragger(this.props.index);
    }

    handleDragOff = (e) => {
        e.stopPropagation();
        this.setState({
            dragging: false
        })
        e.target.blur();
        this.props.onDragger(-1);
    }

    noPropagate = (e) => {
        e.stopPropagation();
    }

    render() {
        const adjustX = this.componentElement.current ? this.componentElement.current.offsetWidth : 0;
        const adjustY = 0;
        const positionStyle = {
            top: this.props.coords.y - adjustY,
            left: this.props.coords.x - adjustX
        }

        return (
            <div className={`annotation-label${this.state.dragging ? ' is-dragging' : ''}${this.state.editing ? ' is-editing' : ''}`}
                 style={positionStyle}
                 title={this.props.label}
                 onClick={this.noPropagate}
                 ref={this.componentElement}>
                {!this.state.editing &&
                    <span className="label-text">{this.props.label}</span>
                }
                <span className="hidden-text-width" ref={this.inputWidthCheck}>{this.props.label}</span>

                <button className="label-dragger-btn"
                        onMouseDown={this.handleDragOn}
                        onMouseUp={this.handleDragOff}
                        onClick={this.noPropagate}>
                            <span>drag</span>
                </button>
                <form>
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
                                style={{width: this.inputWidthCheck.current.offsetWidth + 16}}
                                pattern="[\w\s',]+"
                                defaultValue={this.props.label}
                                ref={this.editInput}
                                onClick={this.noPropagate}
                                onBlur={this.handleEditBlur}
                                onInput={this.handleInput}
                                maxLength={256}
                                autoFocus
                                />
                        </Fragment>
                    }
                </form>
            </div>
        )
    }
}

export default AnnotateLabel;

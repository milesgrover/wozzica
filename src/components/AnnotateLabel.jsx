import React, { Component, Fragment } from 'react';
import '../styles/AnnotateLabel.css';

class AnnotateLabel extends Component {
    constructor(props) {
        super(props);

        this.state = {
            flashControls: this.props.readonly ? false : true,
            dragging: false,
            editing: false,
            savedState: null
        }

        // refs
        this.componentElement = React.createRef();
        this.editInput = React.createRef();
        this.inputWidthCheck = React.createRef();
    }

    componentDidMount = () => {
        this.props.onUpdate(null, this.props.data.uid,
            { w: this.componentElement.current.offsetWidth, h: this.componentElement.current.offsetHeight });
        setTimeout(() => {
            this.setState({
                flashControls: false
            })
        }, 3000)
    }

    handleEditClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.setState({
            editing: !this.state.editing,
            savedState: {
                text: this.props.data.ltext,
                w: this.props.data.lw,
                h: this.props.data.lh
            }
        });
    }

    handleCancelClick = (e) => {
        e.stopPropagation();
        this.props.onUpdate(this.state.savedState.text, this.props.data.uid,
            { w: this.state.savedState.w, h: this.state.savedState.h });

        this.setState({
            editing: false,
            savedState: null
        });
    }

    handleInput = () => {
        if (this.editInput.current.value) {
            this.inputWidthCheck.current.textContent = this.editInput.current.value;
            if (this.inputWidthCheck.current.offsetWidth + 16 < 256) {
                this.editInput.current.style.width = this.inputWidthCheck.current.offsetWidth + 16 + 'px';
            }
            this.props.onUpdate(this.editInput.current.value, this.props.data.uid,
                { w: this.componentElement.current.offsetWidth, h: this.componentElement.current.offsetHeight });
        }
    }

    handleDragOn = (e) => {
        e.stopPropagation();
        this.setState({
            dragging: true
        })
        this.props.onDragger(this.props.data.uid);
    }

    handleDragOff = (e) => {
        e.stopPropagation();
        this.setState({
            dragging: false
        })
        e.target.blur();
        this.props.onDragger(null);
    }

    buildClass = () => {
        let className = ['annotation-label'];
        if (this.state.dragging) {
            className.push('is-dragging');
        }
        if (this.state.editing) {
            className.push('is-editing');
        }
        if (this.state.flashControls) {
            className.push('flash');
        }
        return className.join(' ');
    }

    noPropagate = (e) => {
        e.stopPropagation();
    }

    render() {
        const adjustX = this.props.data.lw ? this.props.data.lw : 0;

        const positionStyle = {
            top: this.props.data.ly,
            left: this.props.data.lx - adjustX
        }

        return (
            <div className={this.buildClass()}
                 style={positionStyle}
                 title={this.props.data.ltext}
                 onClick={this.noPropagate}
                 ref={this.componentElement}>
                {!this.state.editing &&
                    <span className="label-text">{this.props.data.ltext}</span>
                }
                <span className="hidden-text-width" ref={this.inputWidthCheck}>{this.props.data.ltext}</span>

                {!this.props.readonly &&
                    <Fragment>
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
                                        defaultValue={this.props.data.ltext}
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
                    </Fragment>
                }
            </div>
        )
    }
}

export default AnnotateLabel;

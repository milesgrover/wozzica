import React, { Component, Fragment } from 'react';
import Annotator from '../components/Annotator';
import '../styles/EditMode.css';

class EditMode extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fullScreen: false
        }
    }
    handleLaunchClick = () => {
        this.setState({
            fullScreen: true
        })
    }
    handleCancelClick = () => {
        this.setState({
            fullScreen: false
        })
    }
    render() {
        return (
            <Fragment>
                <div className="wozz-editor" onClick={this.handleLaunchClick}>
                    <img src={this.props.image} alt="" />
                </div>
                { this.state.fullScreen &&
                    <div className="wozz-edit-mode">
                        <div className="wozz-edit-bar">
                            <h1 className="heading">Edit mode</h1>
                            <div className="btn-group">
                                <button className="btn-submit">I'm done, submit</button>
                                <button className="btn-cancel" onClick={this.handleCancelClick}>Never mind, cancel</button>
                            </div>
                        </div>
                        <Annotator image={this.props.image}/>
                    </div>
                }
            </Fragment>
        )
    }
}

export default EditMode;

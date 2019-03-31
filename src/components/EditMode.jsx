import React, { Component, Fragment } from 'react';
import Annotator from '../components/Annotator';
import '../styles/EditMode.scss';
import Shrinker from './Shrinker';

class EditMode extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fullScreen: false,
            uploadToken: '',
            annotations: [],
        }
    }

    handleLaunchClick = () => {
        this.setState({
            fullScreen: true
        });
    }

    handleSubmitClick = () => {
        this.props.updateData(this.state.annotations);
        this.setState({
            fullScreen: false
        });
    }

    handleCancelClick = () => {
        this.setState({
            fullScreen: false,
            annotations: [],
        });
    }

    handleAnnotatorUpdate = (data) => {
        this.setState({
            annotations: data,
        });
    }

    render() {
        return (
            <Fragment>
                <div
                    ref={this.editorRef}
                    className="wozz-editor"
                    onClick={this.handleLaunchClick}
                >
                    <Shrinker>
                        <Annotator
                            name={this.props.thingData.name}
                            uid={this.props.thingData.id}
                            image={this.props.thingData.image}
                            data={this.props.thingData.annotations}
                            onUpdate={this.handleAnnotatorUpdate}
                            readonly
                        />
                    </Shrinker>
                </div>
                { this.state.fullScreen &&
                    <div className="wozz-edit-mode">
                        <div className="wozz-edit-bar">
                            <h1 className="heading">Edit mode</h1>
                            <div className="btn-group">
                                <button className="btn-submit" onClick={this.handleSubmitClick}>I'm done, submit</button>
                                <button className="btn-cancel" onClick={this.handleCancelClick}>Never mind, cancel</button>
                            </div>
                        </div>
                        <Annotator
                            uid={this.props.thingData.id}
                            image={this.props.thingData.image}
                            data={this.props.thingData.annotations}
                            onUpdate={this.handleAnnotatorUpdate}
                        />
                    </div>
                }
            </Fragment>
        )
    }
}

export default EditMode;

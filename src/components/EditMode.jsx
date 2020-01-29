import React, { Component, Fragment } from 'react';
import Annotator from '../components/Annotator';
import Shrinker from './Shrinker';
import html2canvas from 'html2canvas';
import { getToken, uploadImage, updateThing } from '../api';
import './EditMode.scss';

class EditMode extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fullScreen: false,
            uploadToken: '',
            annotations: [],
            imageUrl: '',
        }

        this.annotatorRef = React.createRef();
    }

    handleLaunchClick = () => {
        this.setState({
            fullScreen: true
        });
    }

    handleSubmitClick = () => {
        this.props.updateData({ annotations: this.state.annotations });
        
        html2canvas(this.annotatorRef.current, {
            backgroundColor: null,
            logging: false,
            onclone: (doc) => {
                doc.querySelector('.wozz-annotator img').style.opacity = '0';
            }
        })
        .then(canvas => {
        canvas.toBlob(blob => {
            const file = new File([blob], this.props.thingData.name + '-flan');
            const fileContents = new FileReader();
            const ext = '.png';
            const newName = this.state.createID + ext;

            fileContents.addEventListener('load', () => {
                getToken(this)
                .then(res => {
                    uploadImage(this.state.uploadToken, newName, file, this);
                    updateThing({readonlyImage: this.state.imageUrl})
                });
            });
            fileContents.readAsArrayBuffer(file);
        })

            // const file = canvas.toBlob('image/png');
            // const fileContents = new FileReader();
            // const ext = '.png';
            // const newName = this.state.createID + "." + ext;

            // fileContents.addEventListener('load', () => {
            //     getToken(this)
            //     .then(res => {
            //         uploadImage(this.state.uploadToken, newName, file, this)
            //     });
            // });
            // fileContents.readAsArrayBuffer(file);
            // this.setState({
            //     fullScreen: false,
            //     readonlyImage: file
            // });
            // this.props.updateData({readonlyImage: file})
        });
    }

    handleCancelClick = () => {
        this.setState({
            fullScreen: false,
            annotations: [],
        });
        this.props.onCancel();
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
                            readonlyImage={this.state.readonlyImage}
                            clickToEdit
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
                            forwardedRef={this.annotatorRef}
                        />
                    </div>
                }
            </Fragment>
        )
    }
}

export default EditMode;

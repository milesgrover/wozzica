import React, { Component, Fragment } from 'react';
import EditMode from '../components/EditMode';
import PageTemplate from '../components/PageTemplate';
import TitleBar from '../components/TitleBar';
import LoadIcon from '../components/LoadIcon';
import Heading from '../components/Heading';
import * as caps from '../utilities/capitalize';
import { getToken, getData, updateThing } from '../api';
import BigButton from '../components/BigButton';
import { Base64String } from '../utilities/base64-string';

import './AnnotatePage.scss';
import TagList from '../components/TagList';
import AddButton from '../components/AddButton';

class AnnotatePage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            thingData: {},
            uploadToken: '',
            loading: true,
            updating: false,
        }
    }

    componentDidMount() {
        getData(this, this.props.thingId)
        .then(res => {
            this.setState({
                loading: false,
            });
        });
    }

    handleEditorUpdate = (data) => {
        console.log(data.readonlyImage)
        if (data.readonlyImage) {
            data.readonlyImage = Base64String.compressToUTF16(data.readonlyImage);
        }
        console.log(data.readonlyImage)
        const updateThing = Object.assign({}, this.state.thingData, data);
        this.setState({
            thingData: updateThing
        });
    }

    handleEditorCancel = () => {
        getData(this, this.props.thingId);
    }

    handleFinishClick = () => {
        this.setState({
            updating: true,
        });
        getToken(this)
        .then(() => updateThing({
            title: this.state.thingData.id,
            thing: this.state.thingData,
            token: this.state.uploadToken
        }, (req) => {
            this.setState({
                updating: false,
            });
            this.props.history.push(`/thing/${this.props.thingId}/${this.props.thingName}`);
        }))
    }

    handleAddNames = () => {
        return;
    }

    handleAddTags = () => {
        return;
    }

    render() {
        if (this.state.loading) {
            return (
                <LoadIcon fill="#00d6bc" />
            );
        } else {
            // console.log(this.state.thingData)
            return (
                <Fragment>
                    <TitleBar title="Annotate!" />
                    <PageTemplate>
                        <div className="wozz-content-area">
                            <EditMode thingData={this.state.thingData} updateData={this.handleEditorUpdate} onCancel={this.handleEditorCancel} />
                            <BigButton onClick={this.handleFinishClick} disabled={this.state.updating}>
                                Finish
                                {this.state.updating &&
                                    <Fragment>
                                        ing
                                        <LoadIcon />
                                    </Fragment>
                                }
                            </BigButton>
                        </div>
                        <aside className="wozz-aside-area">
                            <Heading type="section">This is called a</Heading>
                            <Heading type="thing">{caps.sentencify(this.props.thingName)}</Heading>
                            <AddButton onClick={this.handleAddNames}>add other names</AddButton>
                            <Heading type="section">Tagged</Heading>
                            <TagList tags={this.state.thingData.tags} />
                            <AddButton onClick={this.handleAddTags}>add more tags</AddButton>
                        </aside>
                    </PageTemplate>
                </Fragment>
            );
        }
    }
}

export default AnnotatePage;
import React, { Component, Fragment } from 'react';
import EditMode from '../components/EditMode';
import PageContainer from '../components/PageContainer';
import LoadPage from '../components/LoadPage';
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
        getData(this, this.props.match.params.thingId)
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
        getData(this, this.props.match.params.thingId);
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
            this.props.history.push(`/thing/${this.props.match.params.thingId}/${this.props.match.params.thingName}`);
        }))
    }

    handleAddNames = () => {
        return;
    }

    handleAddTags = () => {
        return;
    }

    render() {
        console.log(this.props)
        if (this.state.loading) {
            return (
                <PageContainer className="wozz-annotate">
                    <LoadPage />
                </PageContainer>
            );
        } else {
            return (
                <PageContainer className="wozz-annotate">
                    <main>
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
                    </main>
                    <aside>
                        <Heading type="section">This is called a</Heading>
                        <Heading type="thing">{caps.sentencify(this.props.match.params.thingName)}</Heading>
                        <AddButton onClick={this.handleAddNames}>add other names</AddButton>
                        <Heading type="section">Tagged</Heading>
                        <TagList tags={this.state.thingData.tags} />
                        <AddButton onClick={this.handleAddTags}>add more tags</AddButton>
                    </aside>
                </PageContainer>
            );
        }
    }
}

export default AnnotatePage;
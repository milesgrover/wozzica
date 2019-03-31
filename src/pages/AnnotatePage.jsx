import React, { Component, Fragment } from 'react';
import EditMode from '../components/EditMode';
import PageTemplate from "../components/PageTemplate";
import TitleBar from "../components/TitleBar";
import LoadIcon from "../components/LoadIcon";
import '../styles/AnnotatePage.scss';
import Heading from '../components/Heading';

import { getToken, getData, updateAnnotations } from "../api";
import BigButton from '../components/BigButton';

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
        const updateThing = Object.assign({}, this.state.thingData, { annotations: data });
        this.setState({
            thingData: updateThing
        });
    }

    handleFinishClick = () => {
        this.setState({
            updating: true,
        });
        getToken(this)
        .then(() => updateAnnotations({
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

    render() {
        if (this.state.loading) {
            return (
                <LoadIcon fill="#00d6bc" />
            );
        } else {
            return (
                <Fragment>
                    <TitleBar title="Annotate!" />
                    <PageTemplate>
                        <div className="wozz-content-area">
                            <EditMode thingData={this.state.thingData} updateData={this.handleEditorUpdate} />
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
                            <div>This is called a</div>
                            <Heading type="page">{this.props.thingName}</Heading>
                        </aside>
                    </PageTemplate>
                </Fragment>
            );
        }
    }
}

export default AnnotatePage;

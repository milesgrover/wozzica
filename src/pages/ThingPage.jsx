import React, { Component } from 'react';
import Annotator from '../components/Annotator';
import LoadIcon from "../components/LoadIcon";
import Heading from "../components/Heading";
import PageTemplate from "../components/PageTemplate";
import TagList from "../components/TagList";
import Shrinker from "../components/Shrinker";
import { getData } from "../api";
import '../styles/ThingPage.scss';

class ThingPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            thingData: {},
            loading: true,
        }
    }
    componentDidMount() {
        getData(this, this.props.thingId)
        .then(() => {
            this.setState({
                loading: false,
            });
        });
    }
    render() {
        if (this.state.loading) {
            return (
                <div className="wozz-page-content">
                    <LoadIcon fill="#00d6bc" />
                </div>
            )
        }
        if (this.state.thingData.annotations) {
            return (
                <PageTemplate>
                    <div>
                        <div>This is called a</div>
                        <Heading type="page">{this.props.thingName}</Heading>
                        <div className="wozz-thing-illustration">
                            <Shrinker>
                                <Annotator readonly
                                        uid={this.props.thingId}
                                        image={this.state.thingData.image}
                                        data={this.state.thingData.annotations}
                                />
                            </Shrinker>
                        </div>
                        <TagList tags={this.state.thingData.tags} />
                    </div>
                </PageTemplate>
            );
        } else {
            return null;
        }
    }
}

export default ThingPage;

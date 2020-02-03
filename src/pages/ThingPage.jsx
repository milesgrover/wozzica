import React, { Component } from 'react';
import Annotator from '../components/Annotator';
import LoadPage from "../components/LoadPage";
import Heading from "../components/Heading";
import Text from "../components/Text";
import PageContainer from "../components/PageContainer";
import TagList from "../components/TagList";
import Shrinker from "../components/Shrinker";
import { getData } from "../api";
import './ThingPage.scss';

class ThingPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            thingData: {},
            loading: true,
        }
    }
    componentDidMount() {
        getData(this, this.props.match.params.thingId)
        .then(() => {
            this.setState({
                loading: false,
            });
        });
    }

    handleEditClick = () => {
        this.props.history.push(`/annotate/${this.props.match.params.thingId}/${this.state.thingData.name}`)
    }

    render() {
        console.log(this.state.thingData)
        if (this.state.loading) {
            return (
                <PageContainer className="wozz-thing">
                    <LoadPage />
                </PageContainer>
            )
        }
        if (this.state.thingData.annotations) {
            return (
                <PageContainer className="wozz-thing">
                    <div>
                        <header>
                            <section>
                                <div>This is called a</div>
                                <Text type="thing_name">
                                    {this.state.thingData.name}
                                </Text>
                            </section>
                            <section>
                                <button onClick={this.handleEditClick}>edit</button>
                            </section>
                        </header>
                        <div className="wozz-thing-illustration">
                            <Shrinker>
                                <Annotator readonly
                                        uid={this.state.thingData.id}
                                        image={this.state.thingData.image}
                                        data={this.state.thingData.annotations}
                                        readonlyImage={this.state.thingData.readonlyImage}
                                />
                            </Shrinker>
                        </div>
                        <TagList tags={this.state.thingData.tags} />
                    </div>
                </PageContainer>
            );
        } else {
            return null;
        }
    }
}

export default ThingPage;

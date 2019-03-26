import React, { Component } from 'react';
import Annotator from '../components/Annotator';
import LoadIcon from "../components/LoadIcon";
import Heading from "../components/Heading";
import PageTemplate from "../components/PageTemplate";
import '../styles/ThingPage.scss';

class ThingPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            thing: {},
            loading: true,
        }
    }
    componentDidMount() {
        let origin = process.env.NODE_ENV === "development" ? "&origin=*" : "";
        let self = this;
        fetch(`http://www.wozzica.com/wiki/api.php?action=parse&format=json&prop=wikitext&page=${this.props.thingId}${origin}`)
            .then(res => res.json())
            .then(thing => { self.setState({ thing: { id: thing.parse.title, ...JSON.parse(thing.parse.wikitext["*"]) } }) })
            .then(res => {
                self.setState({
                    loading: false,
                });
            });
    }
    render() {
        if (this.state.loading) {
            return (
                <div className="wozz-page-content">
                    <LoadIcon />
                </div>
            )
        }
        if (this.state.thing.annotations) {
            return (
                <PageTemplate>
                    <div className="wozz-thing-illustration">
                        <Heading type="page">{this.props.thingName}</Heading>
                        <Annotator readonly
                                   uid={this.props.thingId}
                                   image={this.state.thing.image}
                                   data={this.state.thing.annotations}
                        />
                    </div>
                    <div>Thing stuff</div>
                </PageTemplate>
            );
        } else {
            return null;
        }
    }
}

export default ThingPage;

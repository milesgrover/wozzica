import React, { Component } from 'react';
import Annotator from '../components/Annotator';
import '../styles/ThingPage.css';

class ThingPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            thing: {}
        }
    }
    componentDidMount() {
        let origin = process.env.NODE_ENV === "development" ? "&origin=*" : "";
        let self = this;
        fetch(`http://www.wozzica.com/wiki/api.php?action=parse&format=json&prop=wikitext&page=${this.props.thingId}${origin}`)
            .then(res => res.json())
            .then(thing => { self.setState({ thing: { id: thing.parse.title, ...JSON.parse(thing.parse.wikitext["*"]) } }) });
    }
    render() {
        if (this.state.thing.annotations) {
            return (
                <div className="wozz-page-content">
                    <div className="wozz-thing-illustration">
                        <Annotator readonly
                                   uid={this.props.thingId}
                                   image={this.state.thing.image}
                                   data={this.state.thing.annotations}
                        />
                    </div>
                </div>
            )
        } else {
            return null;
        }
    }
}

export default ThingPage;

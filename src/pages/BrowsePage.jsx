import React, { Component, Fragment } from 'react';
import TitleBar from '../components/TitleBar';
import PageTemplate from "../components/PageTemplate";

import './BrowsePage.scss';


class BrowsePage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            things: [],
        };
    }
    componentDidMount() {
        let origin = process.env.NODE_ENV === "development" ? "&origin=*" : "";
        let self = this;
        fetch(`http://www.wozzica.com/wiki/api.php?action=query&format=json&list=allpages${origin}`)
            .then(res => res.json())
            .then(pages => {
                return pages.query.allpages.map((p) => {
                    return fetch(`http://www.wozzica.com/wiki/api.php?action=parse&format=json&prop=wikitext&page=${p.title}${origin}`)
                    .then(res => res.json())
                    .then(thing => {self.setState({ things: [...this.state.things, {id: thing.parse.title, ...JSON.parse(thing.parse.wikitext["*"])}] })});
                });
            })
    }
    render() {
        return (
                
            <Fragment>
                {/* <TitleBar title={this.props.title} /> */}
                <PageTemplate>
                    <div>
                        {this.state.things &&
                            this.state.things.map((thing) => {
                                console.log(thing)
                                return (
                                    <div className="wozz-browse-item" key={thing.id}>
                                        <img src={thing.image} alt={thing.name} />
                                        <div>
                                            <h2>
                                                <a href={`/thing/${thing.id}/${thing.name.replace(/\s/g, '%20')}`}>
                                                    {thing.name}
                                                </a>
                                            </h2>
                                            <p>tags: {thing.tags.join(", ")}</p>
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </div>
                </PageTemplate>
            </Fragment>
        )
    }
}

export default BrowsePage;

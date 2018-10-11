import React, { Component } from 'react';
import AddPage from '../pages/AddPage';
import AnnotatePage from '../pages/AnnotatePage';
import BrowsePage from '../pages/BrowsePage';
import HomePage from '../pages/HomePage';
import ThingPage from '../pages/ThingPage';

import '../styles/Page.css';

class Page extends Component {
    determinePage = () => {
        const PageList = {
            add: AddPage,
            annotate: AnnotatePage,
            browse: BrowsePage,
            home: HomePage,
            thing: ThingPage
        }
        const PageName = PageList[this.props.category];
        return (
            <PageName category={this.props.category}
                      title={this.props.title}
                      item={this.props.item}
                      thingName={this.props.thingName}
                      thingId={this.props.thingId}
                      />
        );
    }

    render() {
        return (
            <div className="wozz-page-container">
                {this.determinePage()}
            </div>
        )
    }
}

export default Page;

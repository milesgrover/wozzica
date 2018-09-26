import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { CSSTransitionGroup } from 'react-transition-group';
import SiteBar from './components/SiteBar';
import TitleBar from './components/TitleBar';

import './styles/App.css';

class App extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        const category = this.props.match.params.cat || 'home';
        const categoryTitles = {
            home: 'Welcome to Wozzica',
            add: 'Add a new thing',
            browse: 'Browse',
            search: 'Search results',
            thing: 'This thing' // TODO hookup this title to data
        }
        return (
            <div>
                <SiteBar category={category} />

                <CSSTransitionGroup
                  transitionName="title-bar"
                  transitionAppear={true}
                  transitionAppearTimeout={300}
                  transitionEnterTimeout={300}
                  transitionLeave={false}>
                    <TitleBar title={categoryTitles[category]} key={category} />
                </CSSTransitionGroup>
            </div>
        )
    }
}

const AppWithRouter = withRouter(App);

export default AppWithRouter;

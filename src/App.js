import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { CSSTransitionGroup } from 'react-transition-group';
import ViewRePorter from './components/ViewRePorter';
import SiteBar from './components/SiteBar';
import TitleBar from './components/TitleBar';
import Page from './components/Page';

import './styles/App.css';

class App extends Component {
    render() {
        const category = this.props.match.params.cat || 'home';
        const categoryTitles = {
            home: 'Welcome to Wozzica',
            add: 'Add a new thing',
            search: 'Search results',
            thing: 'This thing' // TODO hookup this title to data
        }
        return (
            <div className={`wozz-app ${category}`}>
                <ViewRePorter>
                    <SiteBar category={category} />
                </ViewRePorter>

                <CSSTransitionGroup
                  transitionName="title-bar"
                  transitionAppear={true}
                  transitionAppearTimeout={300}
                  transitionEnterTimeout={300}
                  transitionLeave={false}>
                    <TitleBar key={category} title={categoryTitles[category] || category} withdraw={category === 'home'}/>
                </CSSTransitionGroup>

                <Page category={category} />
            </div>
        )
    }
}

const AppWithRouter = withRouter(App);

export default AppWithRouter;

import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { CSSTransitionGroup } from 'react-transition-group';
import ViewRePorter from './components/ViewRePorter';
import SiteBar from './components/SiteBar';
import Page from './components/Page';

import './styles/App.css';

class App extends Component {
    render() {
        const category = this.props.match.params.cat || 'home';
        const categoryTitles = {
            add: 'Add a new thing',
            search: 'Search results'
        }
        return (
            <div className={`wozz-app wozz-${category}`}>
                <ViewRePorter>
                    <SiteBar category={category} />
                </ViewRePorter>

                {!this.props.match.thingName &&
                    <Page category={category}
                        title={categoryTitles[category] || category}
                        item={this.props.match.params.item}
                        />
                }

                {this.props.match.thingName &&
                    <Page category="thing"
                        thingName={this.props.match.params.thingName}
                        thingId={this.props.match.params.thingId}
                        />
                }
            </div>
        )
    }
}

const AppWithRouter = withRouter(App);

export default AppWithRouter;

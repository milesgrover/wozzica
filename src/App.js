import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import ViewRePorter from './components/ViewRePorter';
import SiteBar from './components/SiteBar';
import Page from './components/Page';
import ExperimentPage from './experiment/page';

import './styles/App.scss';
import './styles/animations.scss';

class App extends Component {
    componentDidMount = () => {
        document.addEventListener('keyup', (e) => {
          let key = e.key || e.keycode || 0;
          if (key === 'Tab' || key === 9) {
            let inFocus = document.activeElement;
            inFocus.classList.add('wozz-tab-focus');
            inFocus.addEventListener('blur', (evt) => {
              evt.target.classList.remove('wozz-tab-focus');
            });
          }
        });
    }
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

                {/* <ExperimentPage>
                    <div>hello</div>
                    <div>hello</div>
                </ExperimentPage> */}

                {!this.props.match.params.thingName &&
                    <Page category={category}
                        title={categoryTitles[category] || category}
                        item={this.props.match.params.item}
                        history={this.props.history}
                        />
                }

                {this.props.match.params.thingName &&
                    <Page category="thing"
                        thingName={this.props.match.params.thingName}
                        thingId={this.props.match.params.thingId}
                        history={this.props.history}
                        />
                }
            </div>
        )
    }
}

const AppWithRouter = withRouter(App);

export default AppWithRouter;

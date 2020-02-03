import React, { Component } from 'react';
import {
    Switch,
    Route,
    withRouter
} from 'react-router-dom';
import ViewRePorter from './components/ViewRePorter';
import SiteBar from './components/SiteBar';

import './App.scss';
import './design-system/animations.scss';
import {
    HomePage,
    AddPage,
    BrowsePage,
    ThingPage,
    AnnotatePage,
} from "./pages";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: this.props.location.pathname.slice(1) || "home",
        }
    }
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
    componentDidUpdate(prevProps) {
        if (prevProps.location.pathname !== this.props.location.pathname) {
            this.updateCurrentPage()
        }
    }
    updateCurrentPage = () => {
        this.setState({
            currentPage: this.props.location.pathname.slice(1) || "home",
        });
    }
    render() {
        return (
            <>
                <div className={`wozz-app`}>
                    <ViewRePorter>
                        <SiteBar page={this.state.currentPage} />
                    </ViewRePorter>
                    <Switch>
                        <Route exact path="/" component={HomePage}/>
                        <Route exact path="/add" component={AddPage}/>
                        <Route exact path="/browse" component={BrowsePage}/>
                        <Route exact path="/annotate/:thingId/:thingName" component={AnnotatePage}/>
                        <Route exact path="/thing/:thingId/:thingName" component={ThingPage}/>
                    </Switch>
                </div>
            </>
        )
    }
}

const AppWithRouter = withRouter(App);

export default AppWithRouter;

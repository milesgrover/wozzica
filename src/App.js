import React, { Component } from 'react';
import PageTemplate from './components/PageTemplate';
import { withRouter } from 'react-router-dom';
import './styles/App.css';

class App extends Component {
    render() {
        return (
            <PageTemplate route={this.props} />
        );
    }
}

const AppWithRouter = withRouter(App);

export default AppWithRouter;

import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';
import './styles/index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const Portfolio = () => {
    return (
        <Switch>
            <Redirect exact from="/" to="/design" />
            <Route path="/:cat" component={App}/>
            <Route path="/:cat/:item" component={App}/>
        </Switch>
    );
}

ReactDOM.render((
    <Router>
        <Portfolio />
    </Router>
), document.getElementById('root'));
registerServiceWorker();

import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import './styles/index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const Portfolio = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={App}/>
                <Route path="/:cat" component={App}/>
                <Route path="/:cat/:item" component={App}/>
            </Switch>
        </div>
    );
}

ReactDOM.render((
    <Router>
        <Portfolio />
    </Router>
), document.getElementById('root'));
registerServiceWorker();

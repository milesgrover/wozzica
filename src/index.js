import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
} from 'react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// const Wozzica = () => {
//     return (
//         <Switch>
//             <Route exact path="/" component={App}/>
//             <Route exact path="/:cat" component={App}/>
//             <Route exact path="/:cat/:thingId/:thingName" component={App}/>
//         </Switch>
//     );
// }

ReactDOM.render((
    <Router>
        <App />
    </Router>
), document.getElementById('root'));
registerServiceWorker();

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import App from './App';
import About from './About';

// Load components
// import Routes from './Routes';
import './global.css';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App} />
    <Route path="/About" component={About} />
 </Router>,
  document.getElementById('root')
);



import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import App from './App'
import About from './About'
// import Checkout from './Checkout'
import Products from './Products'
import Cart from './Cart'
import Product from './Product'

//window.apiHost  = 'http://blah.heroku.com'
// window.apiHost  = 'http://localhost:3001'


// Load components
// import Routes from './Routes';
import './global.css';

ReactDOM.render(

  <Router history={browserHistory}>
    <Route path="/" component={App}>
        <IndexRoute component={Products} />
        <Route path="About" component={About} />
        <Route path="cart" component={Cart} />
        <Route path="products" component={Products} />
        <Route path="product" component={Product} />
    </Route>
 </Router>,

  document.getElementById('root')
);



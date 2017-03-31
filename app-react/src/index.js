import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import App from './App'
import Home from './Home'
import About from './About'
// import Checkout from './Checkout'
import Products from './Products'
import Cart from './Cart'
import Product from './Product'
import ProductDetail from './ProductDetail'

//window.apiHost  = 'http://blah.heroku.com'
// window.apiHost  = 'http://localhost:3001'


// Load components
// import Routes from './Routes';
import './global.css';

ReactDOM.render(

  <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="about" component={About} />
        <Route path="cart" component={Cart} />
        <Route path="product/:productId" component={ProductDetail} />
      </Route>
 </Router>,

  document.getElementById('root')
);



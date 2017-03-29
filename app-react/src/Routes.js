// Load React
import React from 'react'

// Load React Router
import { Router, Route, browserHistory } from 'react-router'

// Load React Router Redux
// import { Provider } from 'react-redux'
// import { syncHistoryWithStore } from 'react-router-redux'
// import store from './Reducers'
// const history = syncHistoryWithStore(browserHistory, store)

// Load page view components
// Import your components here...
import App from './App'
import Nav from './Nav'
import Product from './Product'
import About from './About'
// import Completed from './components/Completed'


// Configure routes
class Routes extends React.Component {
    render() {
        return <Provider store={store}>
            <Router history={history}>
                <Route path="/" component={App} />
                <Route path="/Product" component={Product} />
                <Route path="/About" component={About} />
            </Router>
        </Provider>
    }
}

export default Routes
import React, { Component } from 'react';
import { browserHistory, Link } from 'react-router'

import FilterAndSearch from './FilterAndSearch'
import Products from './Products'
import Nav from './Nav'
import Search from './Search'
import Footer from './Footer'

class App extends Component {
    constructor(props) {
        super(props)
        this.getProducts = this.getProducts.bind(this)
    
    this.state = {
        products: []
    }
}
    componentWillMount() {
        this.getProducts
    }

    getProducts() {
        fetch(window.apiHost + '/api/products')
        .then(response => response.json)
        .then(response => this.setState({products: response}))
    }

        filterProducts(term) {
            let products = this.state.products
            products = products.filter(function(product) {
                return product.name.includes(term)
            })

            this.setState ({
                products: products
            })
        }
    

  render() {
    return <div>
        <Nav/>
        <div className="container">
        {/*<a onClick={() => browserHistory.push('/checkout')}>Checkout</a>
        <Link to="/checkout">Checkout</Link>
        <FilterAndSearch filterProducts={this.filterProducts}/> */}
        <div>
        {this.props.Products}
        </div>


      {this.props.children}
      </div>
      <Footer/>
      </div>
    
  }
}

export default App;

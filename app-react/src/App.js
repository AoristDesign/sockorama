import React, { Component } from 'react';
// import { browserHistory } from 'react-router'

import Products from './Products'
import Nav from './Nav'
import Search from './Search'
import Footer from './Footer'
// import Product from './Product'

class App extends Component {
    constructor(props) {
        super(props)
        this.getProducts = this.getProducts.bind(this)
    
    this.state = {
        products: [],
        product: {}
    }
}
    componentWillMount() {
        this.getProducts()
    }

    getProducts() {
        fetch('https://enigmatic-waters-89034.herokuapp.com/api/products')
        .then(response => response.json())
        .then(response => this.setState({products: response}))
        // .then(response => console.log(response))
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
        <Search/>
        <Products products={this.state.products}/>
       </div>
      <Footer/>
      </div>
    
  }
}

export default App;

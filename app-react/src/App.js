import React, { Component } from 'react';

import Nav from './Nav'
import Footer from './Footer'

class App extends Component {
    constructor(props) {
        super(props)
        this.getProducts = this.getProducts.bind(this)
        // this.getProduct = this.getProduct.bind(this)
    
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
            {this.props.children}
        <Footer/>
    </div>
  }
}

export default App;

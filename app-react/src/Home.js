import React, { Component } from 'react';

import Search from './Search'
import Products from './Products'

class Home extends Component {
    constructor(props) {
        super(props)
        this.getProducts = this.getProducts.bind(this)

        this.state = {
            products: []
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

    render() {
        return <div className="container">
            <Search/>
            <Products products={this.state.products}/>
        </div>
    }
}

export default Home;

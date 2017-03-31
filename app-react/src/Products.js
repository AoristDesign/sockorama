import React, { Component } from 'react';
// import Search from './Search'
import Product from './Product'
// import About from './About'
// import { browserHistory, Link } from 'react-router'


class Products extends Component {
  render() {
    let products = this.props.products.map((product, key) => <Product key={key} {...product} />)

    return ( 
        <div>
            {products}
        </div>
    )
  }
}

export default Products;

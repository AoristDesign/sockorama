import React, { Component } from 'react';
// import Search from './Search'
import Product from './Product'
// import { browserHistory, Link } from 'react-router'


class Products extends Component {
  render() {
    let products = this.props.products.map((product, key) => <Product key={key} {...product}/>)


    return ( 
        <div>
            <div className="row">
            {products}
            </div>
            
        </div> 
        
     
    );
  }
}

export default Products;

import React, { Component } from 'react';


class Products extends Component {
  render() {
    return ( 
        <div>
            <h2> Filter </h2>
            <button type="button" className="btn-btn-success btn-block" onClick={this.props.filterProducts}>Filter</button>
        </div>
     
    );
  }
}

export default Products;

import React, { Component } from 'react';
import { browserHistory } from 'react-router'

class Cart extends Component {
  render() {
    return ( 
        <div>
        <div className="container">
        <div className="row">
            <h3 className="text-center">Shopping Cart</h3>
            <div className="col-sm-6 col-sm-offset-2">
                    <hr/>
                    <div className="card text-center">
                        <p>content from javascript here</p>
                    </div>
                    <a href="?">Delete</a>
                    <hr/>
            </div>
            <div className="col-sm-4 text-center">
                <hr/>
                <h4>Subtotal: $$$$ </h4>
                <button type="submit" className="btn btn-default btn-block" onClick={() => browserHistory.push('/Checkout')}>Proceed to Checkout</button>
            </div>
        </div>
        </div>
        </div>
     
    );
  }
}

export default Cart;

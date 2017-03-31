import React, { Component } from 'react';
import { browserHistory } from 'react-router'

class Nav extends Component {
    render() {
        return (
        <nav>
                <div className="container">
                    <div className="row nav">
                        <div className="col-sm-6 text-left nav-left">
                            <a href="#" onClick={() => browserHistory.push('/')}>SOCKORAMA</a>
                            <a href="#" onClick={() => window.$('#signinModal').modal('toggle')}>Sign In</a>
                        </div>
                        <div className="col-sm-6 text-right nav-right">
                            <a href="#" onClick={() => browserHistory.push('/about')}>About</a>
                            <a href="#" onClick={() => browserHistory.push('/cart')}>Cart</a>
                        </div>
                    </div>
                </div>
                <section>
                <div className="main-carousel" data-flickity='{ "cellAlign": "left", "contain": true }'>
                    <div className="carousel-cell text-center">FREE SHIPPING ON ORDERS OVER $50</div>
                    <div className="carousel-cell text-center">BUY 10 GET 1 FREE</div>
                    <div className="carousel-cell text-center"><a href="?">EXPLORE NEW ARRIVALS!</a></div>
                </div>
                </section>
                <header className="text-center">
                <h1 className="title">SOCKORAMA</h1>
                </header>
            </nav>
        );
    }
}

export default Nav;

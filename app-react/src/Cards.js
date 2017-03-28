import React, { Component } from 'react';


class Cards extends Component {
  render() {
    return ( <div className="container">
        <div className="row cards">
                <div className="col-sm-4">
                    <div className="card">
                        <img className="center-block img-responsive" src="img/alpacasock1.jpg" alt="socks"/>
                        <span className="sock-name text-left">The Furry</span>
                        <span className="sock-price pull-right">$40.00</span>
                    </div>
                </div>
            </div>
        </div>
     
    );
  }
}

export default Cards;

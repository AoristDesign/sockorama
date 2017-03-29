import React, { Component } from 'react';
import Search from './Search'
import { browserHistory, Link } from 'react-router'


class Products extends Component {
  render() {

    return ( 
        <div>
        <Search/>
            <div className="col-sm-4">
                    <div className="card">
                        <img className="center-block img-responsive" src="img/woolsock1.jpg" onClick={() => browserHistory.push('/Product')}/>
                        <span className="text-left">The Sock Monkey</span>
                        <span className="pull-right">$27.00</span>
                    </div>
            </div>
            <div className="col-sm-4">
                    <div className="card">
                        <img className="center-block img-responsive" src="img/woolsock1.jpg"/>
                        <span className="text-left">The Sock Monkey</span>
                        <span className="pull-right">$27.00</span>
                    </div>
            </div>
            <div className="col-sm-4">
                    <div className="card">
                        <img className="center-block img-responsive" src="img/woolsock1.jpg"/>
                        <span className="text-left">The Sock Monkey</span>
                        <span className="pull-right">$27.00</span>
                    </div>
            </div>
                    
                
            
        </div>
     
    );
  }
}

export default Products;

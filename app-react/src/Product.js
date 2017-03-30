import React from 'react'
import { browserHistory } from 'react-router'

class Product extends React.Component {

    
    render() {
        return <div>
            <div className="col-sm-4">
                    <div className="card text-center">
                        <img className="center-block img-responsive" src={this.props.image} alt="socks" onClick={() => browserHistory.push('/Product')}/>
                        <span className="pull-left">{this.props.name}</span>
                        <span className="pull-right">{this.props.price}</span>
                    </div>
            </div>
        </div>
    }
}

export default Product
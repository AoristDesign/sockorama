import React, { Component } from 'react';

class ProductDetail extends Component {
    constructor(props) {
        super(props)
        this.getProduct = this.getProduct.bind(this)

        this.state = {
            product: {}
        }
    }

    componentWillMount() {
        this.getProduct()
    }

    getProduct() {
        fetch('https://enigmatic-waters-89034.herokuapp.com/api/products')
        .then(response => response.json())
        .then(response => {
            response.forEach(product => {
                if (product.id === Number(this.props.params.productId)) {
                    this.setState({product: product})
                }
            })
        })
        // .then(response => console.log(response))
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-sm-4 col-sm-offset-2">
                        <div className="card text-center">
                            <img className="" src={this.state.product.image} alt="socks"/>
                            
                        </div>
                    </div>
                    <div className="col-sm-4 col-sm-offset-2">
                    <p>{this.state.product.name}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductDetail;

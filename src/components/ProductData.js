import React, { Component } from 'react';


class ProductBox extends Component {
  render() {
    return (
      <div>
        <div><a>Name:</a> {this.props.data.name}</div>
        <div><a>Price:</a> {this.props.data.price} $</div>
        <div><a>Description:</a> <div>{this.props.data.description}</div></div>
      </div>
    );
  }
}

export default ProductBox;
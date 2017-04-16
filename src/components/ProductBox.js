import React, { Component } from 'react';
import PetData from './PetData';
import ProductData from './ProductData';

class ProductBox extends Component {
  render() {
    return (
      <div className="petBox">
      	<img src={this.props.data.image} className="petBoxImage"/>
        { this.props.data.isPet ? 
          <PetData data={this.props.data}></PetData> : <ProductData data={this.props.data}></ProductData> }
      </div>
    );
  }
}

export default ProductBox;
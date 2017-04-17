import React, { Component } from 'react';
import Switch, {Case, Default} from 'react-switch-case';
import PetData from './PetData';
import ProductData from './ProductData';
import ArticleData from './ArticleData';

class ProductBox extends Component {
  render() {
    return (
      <div className="petBox">
      	<img src={this.props.data.image} className="petBoxImage"/>
      	<Switch condition={this.props.data.type}>
		  <Case value= "pet">
		    <PetData data={this.props.data}></PetData>
		  </Case>
		  <Case value= "product">
		    <ProductData data={this.props.data}></ProductData>
		  </Case>
		  <Default>
		  	<ArticleData data={this.props.data}></ArticleData>
		  </Default>
		</Switch>
      </div>
    );
  }
}

export default ProductBox;
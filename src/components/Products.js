import React, { Component } from 'react';
import ProductBox from './ProductBox';
import pocketDogs from '../data/pocketDogs';
import largeDogs from '../data/largeDogs';
import shortHairedCats from '../data/shortHairedCats';
import longHairedCats from '../data/longHairedCats';
import catProducts from '../data/catProducts';
import dogProducts from '../data/dogProducts';

class Products extends Component {
  render() {
  	var datas = this.props.route.data;

    return (
      <div className="homeContainer">
        <div>
          {datas.map(data => {
            return <ProductBox key={data.id} data={data}/>
          })}
        </div>
      </div>
    );
  }
}

export default Products;
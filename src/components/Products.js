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
  	var petDatas = shortHairedCats;
  	switch (this.props.location.pathname) {
      case '/PocketDogs': petDatas = pocketDogs;break;
    	case '/LongHairedCats': petDatas = longHairedCats;break;
      case '/LargeDogs': petDatas = largeDogs;break;
      case '/CatProducts': petDatas = catProducts;break;
      case '/DogProducts': petDatas = dogProducts;break;
    }
    
    return (
      <div className="homeContainer">
        <div>
          {petDatas.map(data => {
            return <ProductBox key={data.id} data={data}/>
          })}
        </div>
      </div>
    );
  }
}

export default Products;
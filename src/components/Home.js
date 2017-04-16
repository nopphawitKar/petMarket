import React, { Component } from 'react';
import { Link } from 'react-router'
import ImageContainer from './ImageContainer';

class Home extends Component {
  onClick(event) {
    //console.log('Image loaded ', event.target.src)
  }
  render() {
    return (
      <div>
        <div className="homeContainer">
          <ImageContainer src="/img/dogs/pocket_dog.jpg" waterPrint="pocket dogs" link="/PocketDogs"/>
          <ImageContainer src="/img/dogs/large_dog.jpg" waterPrint="large dogs" link="/LargeDogs"/>
          <ImageContainer src="/img/cats/long_hair_cat.jpg" waterPrint="longhaired cats" link="/LongHairedCats"/>
          <ImageContainer src="/img/cats/short_hair_cat.jpg" waterPrint="shorthaired cats" link="/ShortHairedCats"/>
          <ImageContainer src="/img/dogs/dogProducts/dog_product.jpg" waterPrint="dog products" link="/DogProducts"/>
          <ImageContainer src="/img/cats/catProducts/cat_product.jpg" waterPrint="cat products" link="/CatProducts"/>
        </div>
      </div>
    );
  }
}

export default Home;

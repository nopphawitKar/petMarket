'use strict';

import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './components/App';
import Home from './components/Home';
import Products from './components/Products';

import pocketDogs from './data/pocketDogs';
import largeDogs from './data/largeDogs';
import shortHairedCats from './data/shortHairedCats';
import longHairedCats from './data/longHairedCats';
import catProducts from './data/catProducts';
import dogProducts from './data/dogProducts';
import articles from './data/articles';

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="PocketDogs" component={Products} data={pocketDogs}/>
    <Route path="LargeDogs" component={Products} data={largeDogs}/>
    <Route path="ShortHairedCats" component={Products} data={shortHairedCats}/>
    <Route path="LongHairedCats" component={Products} data={longHairedCats}/>
    <Route path="DogProducts" component={Products} data={dogProducts}/>
    <Route path="CatProducts" component={Products} data={catProducts}/>
    <Route path="CatProducts" component={Products} data={catProducts}/>
    <Route path="Articles" component={Products} data={articles}/>
  </Route>
);

export default routes;

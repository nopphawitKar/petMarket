'use strict';

import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './components/App';
import Home from './components/Home';
import Products from './components/Products';

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="PocketDogs" component={Products}/>
    <Route path="LargeDogs" component={Products}/>
    <Route path="ShortHairedCats" component={Products}/>
    <Route path="LongHairedCats" component={Products}/>
    <Route path="DogProducts" component={Products}/>
    <Route path="CatProducts" component={Products}/>
  </Route>
);

export default routes;

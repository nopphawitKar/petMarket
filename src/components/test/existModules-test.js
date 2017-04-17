import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import expect from 'expect';
import Home from '../Home';
import App from '../App';
import AppRoutes from '../AppRoutes';
import ImageContainer from '../ImageContainer';
import PetData from '../PetData';
import ProductBox from '../ProductBox';
import ProductData from '../ProductData';
import Products from '../Products';
//this file test that all modules are exists!!!

describe('Home', function () {
  it('exist', function () {
    expect(Home).toExist();
  });
});

describe('App', function () {
  it('exist', function () {
    expect(App).toExist();
  });
});

describe('AppRoutes', function () {
  it('exist', function () {
    expect(AppRoutes).toExist();
  });
});

describe('ImageContainer', function () {
  it('exist', function () {
    expect(ImageContainer).toExist();
  });
});

describe('PetData', function () {
  it('exist', function () {
    expect(PetData).toExist();
  });
});

describe('ProductBox', function () {
  it('exist', function () {
    expect(ProductBox).toExist();
  });
});

describe('ProductData', function () {
  it('exist', function () {
    expect(ProductData).toExist();
  });
});

describe('Products', function () {
  it('exist', function () {
    expect(Products).toExist();
  });
});

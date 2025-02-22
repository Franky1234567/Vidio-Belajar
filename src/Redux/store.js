// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import productReducer from './Product';
import progresbarReducer from './progresbarslice';
import ProductBuyReducer from './productbuy';
// import { fetchAllProducts } from './AllProduct';
import allproductReducer from './AllProduct';

const store = configureStore({
  reducer: {
    product: productReducer,
    progresbar: progresbarReducer,
    ProductBuy: ProductBuyReducer,
    allproduct: allproductReducer,
  },
});

export default store;

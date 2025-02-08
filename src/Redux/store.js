// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import productReducer from './Product';
import progresbarReducer from './progresbarslice';
import ProductBuyReducer from './productbuy';

const store = configureStore({
  reducer: {
    product: productReducer,
    progresbar: progresbarReducer,
    ProductBuy: ProductBuyReducer
  },
});

export default store;

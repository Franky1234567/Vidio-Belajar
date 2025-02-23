import { configureStore } from '@reduxjs/toolkit';
import productReducer from './Product';
import progresbarReducer from './progresbarslice';
// import productBuyReducer from './productbuy'; 
import productBuyReducer from './productbuy'; 
import allproductReducer from './AllProduct';

const store = configureStore({
  reducer: {
    product: productReducer,
    progresbar: progresbarReducer,
    productbuy: productBuyReducer,  
    allproduct: allproductReducer,
  },
});

export default store;

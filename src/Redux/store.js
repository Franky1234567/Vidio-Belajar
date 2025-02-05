// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import productReducer from './Product';
import progresbarReducer from './progresbarslice';

const store = configureStore({
  reducer: {
    product: productReducer,
    progresbar: progresbarReducer,
  },
});

export default store;

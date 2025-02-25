import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    productbuy: [],
    time: [],
};
const productbuySlice = createSlice({
    name: "productbuy",
    initialState,
    reducers: {
        setProductBuy: (state, action) => {
            const { product, time } = action.payload;
            const isProductExist = state.productbuy.some((item) => item.id === product.id);
            if (!isProductExist) {
                state.productbuy.push(product); 
            }            
            state.time = time; 
        },
        updateProductProgress: (state, action) => {
            const { id, progress } = action.payload;
            const product = state.productbuy.find((item) => item.id === id);
            if (product) {
                product.progress = progress; 
            }
        },    
        removeProductFromBuy: (state, action) => {
            const idToRemove = action.payload;
            state.productbuy = state.productbuy.filter((product) => product.id !== idToRemove);
        },
    },
});

export const { setProductBuy, updateProductProgress, removeProductFromBuy } = productbuySlice.actions;
export default productbuySlice.reducer;

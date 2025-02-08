import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    productbuy: null,
    time: null,
};

const productbuySlice = createSlice({
    name: "productbuy",
    initialState,
    reducers: {
        setProductBuy: (state, action) => {
            localStorage.setItem("productbuy", JSON.stringify(action.payload));
            state.productbuy = action.payload;
            state.time = action.payload.time;
        },
    },
});
export const { setProductBuy } = productbuySlice.actions;
export default productbuySlice.reducer;
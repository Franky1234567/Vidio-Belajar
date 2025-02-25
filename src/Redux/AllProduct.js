import { createSlice } from '@reduxjs/toolkit';
import { fetchServicesProduct } from "../Services/ServicesProduct";


const initialState = {
    allproduct: [],
    loading: false,
    error: null,
};


const allproductSlice = createSlice({
    name: 'allproduct',
    initialState,
    reducers: {
        setAllProduct(state, action) {
            state.allproduct = action.payload;
        },
        setLoading(state, action) {
            state.loading = action.payload;
        },
        setError(state, action) {
            state.error = action.payload;
        },
    },
});


export const fetchAllProducts = () => async (dispatch) => {
    dispatch(setLoading(true)); 
    try {
        const response = await fetchServicesProduct();  
        dispatch(setAllProduct(response.products));  
    } catch (error) {
        dispatch(setError(error.message));  
    } finally {
        dispatch(setLoading(false)); 
    }
};


export const { setAllProduct, setLoading, setError } = allproductSlice.actions;
export default allproductSlice.reducer;

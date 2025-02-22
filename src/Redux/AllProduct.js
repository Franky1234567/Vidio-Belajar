import { createSlice } from '@reduxjs/toolkit';
import { fetchServicesProduct } from "../Services/ServicesProduct";

// Initial state
const initialState = {
    allproduct: [],
    loading: false,
    error: null,
};

// Slice for all product data
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

// Async action to fetch all products
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

// Export actions and reducer
export const { setAllProduct, setLoading, setError } = allproductSlice.actions;
export default allproductSlice.reducer;

// import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";


export const fetchServices = createSlice({
    name: "services",
    initialState: {
        loading: false,
        services: [],
        error: "",
    },
    reducers: {
        fetchServicesRequest: (state) => {
            state.loading = true;
        },
        fetchServicesSuccess: (state, action) => {
            state.loading = false;
            state.services = action.payload;
            state.error = "";
        },
        fetchServicesFailure: (state, action) => {
            state.loading = false;
            state.services = [];
            state.error = action.payload;
        },
    },
});

export const { fetchServicesRequest, fetchServicesSuccess, fetchServicesFailure } = fetchServices.actions;

export default fetchServices.reducer;
import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    step: 0,
}


const progresbarSlice = createSlice({
    name: "progresbar",
    initialState,
    reducers: {
        nextStep: (state) => {
            state.step += 1;
        },
        prevStep: (state) => {
            state.step -= 1;
        },
    },
});

export const { nextStep, prevStep } = progresbarSlice.actions;
export default progresbarSlice.reducer;
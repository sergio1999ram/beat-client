import { createSlice } from "@reduxjs/toolkit";

export const fareSlice = createSlice({
    name: 'fare',
    initialState: {
        value: -1,
        loading: false
    },
    reducers: {
        SET_FARE: (state, action) => {
            state.value = action.payload;
        },
        LOADING_START: state => {
            state.loading = true;
        },
        LOADING_FINISH: state => {
            state.loading = false;
        }
    },
})

export const { SET_FARE, LOADING_START, LOADING_FINISH } = fareSlice.actions;

export default fareSlice.reducer;
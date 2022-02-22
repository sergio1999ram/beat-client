import { createSlice } from "@reduxjs/toolkit";

export const fareSlice = createSlice({
    name: 'fare',
    initialState: {
        value: null
    },
    reducers: {
        SET_FARE: (state, action) => {
            state.fare = action.payload;
        }
    },
})

export const { SET_FARE } = fareSlice.actions;

export default fareSlice.reducer;
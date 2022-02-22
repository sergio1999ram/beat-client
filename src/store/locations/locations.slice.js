import { createSlice } from '@reduxjs/toolkit';

import axios from 'axios';

import locations from '../../utils/constants/locations';

export const locationSlice = createSlice({
    name: 'locations',
    initialState: {
        locations: locations,
        pickupLocation: {},
        dropoffLocation: {}
    },
    reducers: {
        SET_PICKUP_LOCATION: (state, action) => {
            state.pickupLocation = action.payload;
        },
        SET_DROPOFF_LOCATION: (state, action) => {
            state.dropoffLocation = action.payload;
        },
        SET_LOCATIONS: (state, action) => {
            state.locations = action.payload;
        }
    }
})

export const { SET_PICKUP_LOCATION, SET_DROPOFF_LOCATION, SET_LOCATIONS } = locationSlice.actions;

export const FETCH_LOCATIONS = async () => async dispatch => {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/todos/');
    dispatch(SET_LOCATIONS(data));
}
export default locationSlice.reducer;
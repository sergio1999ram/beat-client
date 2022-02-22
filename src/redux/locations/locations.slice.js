import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';

export const FETCH_LOCATIONS = createAsyncThunk(
    'FETCH_LOCATIONS', async (thunkAPI) => {
        const { data } = await axios.get('http://localhost:3001/api/locations');
        return data;
    }
)

export const locationSlice = createSlice({
    name: 'locations',
    initialState: {
        locations: [],
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
            console.log(action);
            state.locations = action.payload;
        }
    },
    extraReducers: builder => {
        builder.addCase(FETCH_LOCATIONS.fulfilled, (state, action) => {
            state.locations = action.payload.locations;
        })
    }
})

export const { SET_PICKUP_LOCATION, SET_DROPOFF_LOCATION, SET_LOCATIONS } = locationSlice.actions;

export default locationSlice.reducer;
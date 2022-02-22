import { combineReducers } from '@reduxjs/toolkit';
import locationsReducer from './locations/locations.slice';

export default combineReducers({
    locations: locationsReducer
});
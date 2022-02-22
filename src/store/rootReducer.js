import { combineReducers } from '@reduxjs/toolkit';

import locationsReducer from './locations/locations.slice';
import fareReducer from './fare/fare.slice';

export default combineReducers({
    locations: locationsReducer,
    fare: fareReducer
});
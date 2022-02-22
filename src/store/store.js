import { configureStore, applyMiddleware, createStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';

// import { shallow } from 'enzyme';

export const store = configureStore({
    reducer: rootReducer,
})
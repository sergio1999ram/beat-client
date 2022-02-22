import { configureStore, applyMiddleware, createStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import rootReducer from './rootReducer';

// import { shallow } from 'enzyme';

export const store = configureStore({
    reducer: rootReducer,
})

export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector;
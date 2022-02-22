import React from 'react';
import { mount, shallow } from 'enzyme';

import { Provider } from 'react-redux';
import { store } from '../redux/store';

import Form from '../components/Form';
import { FETCH_LOCATIONS } from '../redux/locations/locations.slice';
import rootReducer from '../redux/rootReducer';

import axios from 'axios';

import App from '../App';

jest.mock('axios');
jest.mock('react-redux');

describe("rendering component", () => {

    it("renders Form component without crashing", () => {
        shallow(
            <Provider store={store}>
                <Form />
            </Provider>
        )
    });
})
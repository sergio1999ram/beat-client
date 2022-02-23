import { shallow } from "enzyme";
import React from 'react';
import App from "../App";
import { Provider } from 'react-redux';
import { store } from '../redux/store';

describe('rendering component', () => {
  it('renders App component without crashing', () => {
    shallow(
      <Provider store={store}>
        <App />
      </Provider>
    )
  });
})
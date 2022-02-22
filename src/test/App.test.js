import { shallow, mount } from "enzyme";
// import toJson from 'enzyme-to-json';

import React from 'react';
import App from "../App";

describe('rendering component', () => {
  it('renders App component without crashing', () => {
    shallow(<App />)
  });
})
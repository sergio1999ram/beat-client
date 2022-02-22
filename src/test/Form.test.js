import React from 'react';
import { shallow } from 'enzyme';
import axios from 'axios';
import reducer from '../store/locations/locations.slice';

describe("Store initial state", () => {
    it("should return the initial state", () => {
        const { data } = await axios.get('http://localhost:3001/api/locations');
        console.log(data);
    })
})
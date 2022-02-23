import React from 'react';

import locationsReducer, {
    FETCH_LOCATIONS,
    SET_PICKUP_LOCATION,
    SET_DROPOFF_LOCATION
} from '../redux/locations/locations.slice';

import { store } from '../redux/store';

describe("rendering component", () => {
    it("fetches locations", async () => {
        const dispatch = jest.fn();

        const thunk = FETCH_LOCATIONS();
        const state = store.getState().locations;

        await thunk(dispatch, state, undefined);
        const { calls } = dispatch.mock;

        expect(calls).toHaveLength(2);
        expect(calls[0][0].type).toEqual('FETCH_LOCATIONS/pending');
        expect(calls[1][0].type).toEqual('FETCH_LOCATIONS/fulfilled');

        expect(calls[1][0].payload).toHaveProperty('locations');
    });

    it('should return the initial state', async () => {
        const action = { type: "" };
        const result = locationsReducer(undefined, action);

        expect(result).toHaveProperty('locations');
        expect(result).toHaveProperty('pickupLocation');
        expect(result).toHaveProperty('dropoffLocation');
        expect(result).toEqual({ locations: [], pickupLocation: {}, dropoffLocation: {} })

    });

    it('should set a pickupLocation', async () => {
        const payload = {
            coords: {
                lat: -12.092516876498657,
                lng: -77.0093269438472
            },
            _id: "62151ea8542e2000d5af4b97",
            name: "Clinica Internacional",
        }
        const action = SET_PICKUP_LOCATION(payload);
        const result = locationsReducer(undefined, action);

        expect(result).toHaveProperty('pickupLocation', payload);
        expect(result).toHaveProperty('pickupLocation.coords');
        expect(result).toHaveProperty('pickupLocation._id');
        expect(result).toHaveProperty('pickupLocation.name');
    })

    it('should set a dropoffLocation', async () => {
        const payload = {
            coords: {
                lat: -12.092516876498657,
                lng: -77.0093269438472
            },
            _id: "62151ea8542e2000d5af4b97",
            name: "Clinica Internacional",
        }
        const action = SET_DROPOFF_LOCATION(payload);
        const result = locationsReducer(undefined, action);

        expect(result).toHaveProperty('dropoffLocation', payload);
        expect(result).toHaveProperty('dropoffLocation.coords');
        expect(result).toHaveProperty('dropoffLocation._id');
        expect(result).toHaveProperty('dropoffLocation.name');
    })
})
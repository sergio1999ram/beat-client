import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
    SET_PICKUP_LOCATION,
    SET_DROPOFF_LOCATION
} from '../../../store/locations/locations.slice';

export default function InputSelect({ name }) {
    const locations = useSelector(state => state.locations.locations)
    const pickupLocation = useSelector(state => state.locations.pickupLocation);

    const dispatch = useDispatch();

    function handleChange({ target }) {
        const location = JSON.parse(target.value);

        if (name === 'pickupLocation')
            dispatch(SET_PICKUP_LOCATION(location));
        else
            dispatch(SET_DROPOFF_LOCATION(location));
    }

    if (name === 'pickupLocation')
        return (
            <select name={name} id={`${name}-select`} onChange={handleChange}>
                <option value={JSON.stringify({})}>
                    {name === 'pickupLocation' && 'Select a pick up location'}
                </option>
                {
                    locations.map((location, index) => (
                        <option value={JSON.stringify(location)} key={index}>{location.name}</option>
                    ))
                }
            </select>
        )
    return (
        <select name={name} id={`${name}-select`} onChange={handleChange}>
            <option value={JSON.stringify({})}>
                {name === 'dropoffLocation' && 'Select a drop off location'}
            </option>
            {
                locations.map((location, index) => (
                    location.name !== pickupLocation.name && <option value={JSON.stringify(location)} key={index}>{location.name}</option>
                ))
            }
        </select>
    )
}
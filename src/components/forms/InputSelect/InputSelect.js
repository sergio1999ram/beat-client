import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
    SET_PICKUP_LOCATION,
    SET_DROPOFF_LOCATION
} from '../../../store/locations/locations.slice';

export default function InputSelect({ name }) {
    const locations = useSelector(state => state.locations.locations)
    const pickupLocation = useSelector(state => state.locations.pickupLocation);
    const dropoffLocation = useSelector(state => state.locations.dropoffLocation);

    const dispatch = useDispatch();

    function handleChange({ target }) {
        const location = JSON.parse(target.value);

        if (name === 'pickupLocation') {
            dispatch(SET_PICKUP_LOCATION(location));
            if (pickupLocation._id === dropoffLocation._id) {
                console.log(pickupLocation._id === dropoffLocation._id)
                dispatch(SET_DROPOFF_LOCATION({}));
            }
        }
        else {
            console.log(location, name)
            dispatch(SET_DROPOFF_LOCATION(location));
        }
    }

    if (name === 'pickupLocation')
        return (
            <select name={name} id={`${name}-select`} onChange={handleChange} className='border-2 border-black text-sm py-1.5 bg-slate-100'>
                <option value={JSON.stringify({})}>
                    {name === 'pickupLocation' && 'Select a pick up location'}
                </option>
                {
                    locations.map(location => (
                        <option value={JSON.stringify(location)} key={location._id}>{location.name}</option>
                    ))
                }
            </select>
        )
    return (
        <select name={name} id={`${name}-select`} onChange={handleChange} className='border-2 border-black text-sm py-1.5 bg-slate-100'>
            <option value={JSON.stringify({})}>
                {name === 'dropoffLocation' && 'Select a drop off location'}
            </option>
            {
                locations.map(location => (
                    location._id !== pickupLocation._id && <option value={JSON.stringify(location)} key={location._id}>{location.name}</option>
                ))
            }
        </select>
    )
}
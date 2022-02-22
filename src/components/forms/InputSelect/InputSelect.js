import React from 'react';

import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import {
    SET_PICKUP_LOCATION,
    SET_DROPOFF_LOCATION
} from '../../../redux/locations/locations.slice';

export default function InputSelect({ name }) {
    const locations = useAppSelector(state => state.locations.locations)
    const pickupLocation = useAppSelector(state => state.locations.pickupLocation);
    const dropoffLocation = useAppSelector(state => state.locations.dropoffLocation);

    const dispatch = useAppDispatch();

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
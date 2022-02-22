import React from 'react';
import { useSelector } from 'react-redux';

export default function Button() {
    const pickupLocation = useSelector(state => state.locations.pickupLocation);
    const dropoffLocation = useSelector(state => state.locations.dropoffLocation);

    return (
        <input value='Estimate now!' disabled={Object.keys(pickupLocation).length === 0 || Object.keys(dropoffLocation).length === 0 || pickupLocation.name === dropoffLocation.name} type='submit' className='border-black border-[1.5px] py-1 disabled:cursor-not-allowed disabled:bg-red-300 cursor-pointer' />
    )
}
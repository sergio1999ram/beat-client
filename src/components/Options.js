import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import InputSelect from './forms/InputSelect/InputSelect';
import Button from './forms/Button/Button';

import {
    FETCH_LOCATIONS
} from '../store/locations/locations.slice';

export default function Options() {
    // const dispatch = useDispatch();

    // React.useEffect(() => {
    //     async function fetchLocation() {
    //         dispatch(await FETCH_LOCATIONS());
    //     }
    //     fetchLocation();
    // }, [dispatch]);
    return (
        <div className='w-2/4 flex flex-col'>
            <InputSelect name={'pickupLocation'} />
            <InputSelect name={'dropoffLocation'} />
            <Button />
        </div>
    )
}
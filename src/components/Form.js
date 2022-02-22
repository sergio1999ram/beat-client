import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import InputSelect from './forms/InputSelect/InputSelect';
import Button from './forms/Button/Button';

import {
    FETCH_LOCATIONS
} from '../store/locations/locations.slice';

export default function () {
    // const dispatch = useDispatch();

    // React.useEffect(() => {
    //     async function fetchLocation() {
    //         dispatch(await FETCH_LOCATIONS());
    //     }
    //     fetchLocation();
    // }, [dispatch]);
    return (
        <div className='w-2/4 flex flex-col gap-y-5 px-3 pb-5'>
            <div className='flex flex-col gap-y-3'>
                <InputSelect name={'pickupLocation'} />
                <InputSelect name={'dropoffLocation'} />
            </div>
            <Button />
        </div>
    )
}
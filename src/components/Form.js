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

    function handleSubmit(e) {
        e.preventDefault();
        console.log('submit');
    }
    return (
        <form onSubmit={handleSubmit} className='w-2/4 px-3 pb-5 flex flex-col gap-y-5'>
            <div className='flex flex-col gap-y-3'>
                <InputSelect name={'pickupLocation'} />
                <InputSelect name={'dropoffLocation'} />
            </div>
            <Button />
        </form>
    )
}
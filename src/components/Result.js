import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

export default function Result() {
    const fare = useSelector(state => state.fare.value);
    const dispatch = useDispatch();

    return (
        <div className='w-2/4 px-3 pb-5 flex'>
            <div className='border-dotted border-2 border-black w-full flex justify-center items-center'>
                {fare < 0 ? 'Select your pick up and destination!' : `Your total fare would be ${fare}`}
            </div>
        </div>
    )
}
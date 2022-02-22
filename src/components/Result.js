import React from 'react';
import { useAppSelector } from '../redux/hooks';

export default function Result() {
    const fare = useAppSelector(state => state.fare.value);

    return (
        <div className='w-2/4 px-3 pb-5 flex'>
            <div className='border-dotted border-2 border-black w-full flex justify-center items-center text-center text-lg'>
                {fare < 0 ? 'Select your pick up and destination!' : `Your total fare would be $${fare.toFixed(2)}`}
            </div>
        </div>
    )
}
import React, { useCallback, useState } from 'react';
import '../useLayoutEffect/ejemplo.css'
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {

    const [ counter, setCounter ] = useState(10);

//    const increment = () => {
//        setCounter( counter + 1 );
//    }

    const increment = useCallback(
        (num) => {
            setCounter(c => c + num); 
        },
        [ setCounter ],
    )

    return (
        <div>
            <h2>useCallback hook { counter }</h2>
            <hr />

            <ShowIncrement increment={ increment } />
        </div>
    )
}

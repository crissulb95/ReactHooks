import React, { useState } from 'react';
import { useCounter } from '../../Hooks/useCounter';
import '../useLayoutEffect/ejemplo.css';
import { Small } from './Small';

export const Memorize = () => {

    const { Counter, increment } = useCounter(10);

    const [ show, setShow ] = useState(true);

    return (
        <div>
            <h2>MemorizeCounter: <Small value={ Counter } /></h2>
            <hr />

            <button
                className="btn btn-outline-primary mx-2 "
                onClick={ () => { 
                    increment(1); 
                }}
            >
                +1
            </button>

            <button
                className="btn btn-outline-warning mx-2"
                onClick={ () => {
                    setShow( !show )
                } }>
                Show/Hide { JSON.stringify( show ) }
            </button>
        </div>
    )
}

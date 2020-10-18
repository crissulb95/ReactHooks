import React from 'react';
import { useCounter } from '../../Hooks/useCounter';

import './CounterApp.css';

export const CounterWithCustomHook = () => {

    const { Counter, increment, decrement, reset } = useCounter( 243 );

    return (
        <div>
            <h2>Counter with Hook: { Counter }</h2>
            <hr />

            <button onClick= { () => increment( 2 ) } className="btn btn-info">+</button>
            <button onClick= { () => decrement( 2 ) } className="btn btn-warning">-</button>
            <button onClick= { reset } className="btn btn-danger">reset</button>

        </div>
    )
}

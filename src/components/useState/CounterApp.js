import React, { useState } from 'react';
import './CounterApp.css';

export const CounterApp = () => {

    const [ Counter, setCounter] = useState({
        Counter1 : 10,
        Counter2 : 20,
        Counter3 : 30,
        Counter4 : 40,
    });

    const { Counter1, Counter2 } = Counter; 

    return (
        <>
            <h2>Counter1 { Counter1 }</h2>
            <h2>Counter2 { Counter2 }</h2>
            <hr />
            <button 
            className="btn btn-primary"
            onClick={ () => {
                    setCounter({
                        ...Counter,
                        Counter1 : Counter1 + 1
                    });
                }}>
                +1
            </button>
        </>
    )
}

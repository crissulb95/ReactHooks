import React, { useState } from 'react';
import { MultipleCustomHooks } from '../ejemplos/MultipleCustomHooks';

import './ref.css';

export const RealRef = () => {

    const [ show, setShow ] = useState(false);

    return (
        <div>
            <h2>Real Reference Hook</h2>
            <hr />

            { show && <MultipleCustomHooks /> }

            <button
                className="btn btn-warning mt-3"
                onClick={() => {
                    setShow( !show );
                }}
            >
                On/Off
            </button>
        </div>
    )
}

import React, { useMemo, useState } from 'react';
import { useCounter } from '../../Hooks/useCounter';
import { ProcesoPesado } from '../helpers/memoPesado';
import '../useLayoutEffect/ejemplo.css';

export const HookMemo = () => {

    const { Counter, increment } = useCounter(10); // <-- para demostrar un proceso pesado aumentar a mucho más el número
    const [ show, setShow ] = useState(true);

    const memoProcesoPesado = useMemo(() => ProcesoPesado( Counter ), [ Counter ]);

    return (
        <div>
            <h3>HOOKMemoCounter: <small>{ Counter }</small></h3>
            <hr />

            <p>
                {memoProcesoPesado}
            </p>

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

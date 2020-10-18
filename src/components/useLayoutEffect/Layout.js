import React, { useLayoutEffect, useRef, useState } from 'react';
import { useCounter } from '../../Hooks/useCounter';
import { useFetch } from '../../Hooks/useFetch';
import './ejemplo.css';

export const Layout = () => {
    
    const { Counter, increment } = useCounter(1);
    const { data } = useFetch( `https://www.breakingbadapi.com/api/quotes/${ Counter }` );
    //console.log(datos);
    const { quote } = !!data && data[0];
    
    const tag = useRef();
    const [ estado, setEstado ] = useState({});
    

    useLayoutEffect( () => {
        setEstado( tag.current.getBoundingClientRect() );
    }, [ quote ]);

    //console.log(author, quote);

    return (
        <div>
            <h2>Layout UseEffect Hook</h2>
            <hr />
            
            <blockquote className="blockquote text-right">
                <p 
                    className="mb-0"
                    ref={ tag }
                >
                    { quote }
                </p>
            </blockquote>

            <pre>
                { JSON.stringify( estado, null, 3 ) }
            </pre>

            <button 
                className="btn btn-info"
                onClick={ () => { 
                    increment(1); 
                }}>
                Siguiente frase
            </button>

        </div>
    )
}

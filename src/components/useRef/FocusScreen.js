import React, { useRef } from 'react';
import './ref.css';

export const FocusScreen = () => {

    const inputRef = useRef();

    const handleClick = () => {
        inputRef.current.select();
    };

    return (
        <>
            <h2>Focus Screen</h2>
            <hr />

            <input
                ref={ inputRef }
                type="text"
                placeholder="Nombre"
                className="form-control"
            />

            <button
                type="submit"
                className="btn btn-info mt-3"
                onClick={ handleClick }
                >
                Focus
            </button>
        </>
    )
}

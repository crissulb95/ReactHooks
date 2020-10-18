import React, { memo } from 'react'

export const ShowIncrement = memo(({ increment }) => {
    return (
        <button
            className="btn btn-outline-warning"
            onClick={ () => {
                increment(5);
            }}
        >
            Incrementar
        </button>
    )
})

import React, { useEffect } from 'react'

export const Message = () => {

    useEffect(() => {

        console.log('Component has been mounted');

        return () => {

            console.log('Component has been unmounted');

        }
    }, []);

    return (
        <>
            <p>Prueba</p>
        </>
    )
}

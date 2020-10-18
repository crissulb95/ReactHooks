import React, { useEffect, useState } from 'react'

import { Message } from './Message';

import './effect.css';

export const SimpleForm = () => {

    const [ formState, setFormState ] = useState({
        name : '',
        email : '',
    });

    const { name, email } = formState;

    useEffect( () => {
        //console.log('Efecto!');
    }, [] );

    useEffect( () => {
        //console.log('formState has changed');
    }, [ formState ] );
    
    useEffect( () => {
        //console.log('formState has changed');
    }, [ email ] );

    const handleInputChange = ({ target }) => {
        setFormState({
            ...formState,
            [ target.name ] : target.value,
        });
    };

    return (
        <>
            <h2>Forma simple</h2>
            <hr />  

            <div className="form-group">
                <input 
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Nombre"
                    autoComplete="off"
                    value={ name }
                    onChange={ handleInputChange }
                />
            </div> 

            <div className="form-group">
                <input 
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Correo"
                    autoComplete="off"
                    value={ email }
                    onChange={ handleInputChange }
                />

            { (name.length > 4) && <Message /> }

            </div>
        </>
    )
}

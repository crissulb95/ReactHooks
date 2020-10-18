import React from 'react'
import { useForm } from '../../Hooks/useForm';

import './effect.css';

export const FormWithCustomHook = () => {

    const [ formValue, handleInputChange ] = useForm({
        name : '',
        email : '',
        password : '',
    });

    const { name, email, password } = formValue;

    const handleSubmit = ( e ) => {
        e.preventDefault();
        console.log( formValue );
    };

    return (
        <form onSubmit={ handleSubmit }>
            <h2>FormWithCustomHook</h2>
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
            </div>

            <div className="form-group">
                <input 
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="********"
                    value={ password }
                    onChange={ handleInputChange }
                />
            </div>

            <button 
                type="submit"
                className="btn btn-warning">
                Submit
            </button>

        </form>
    )
}

/** 
 * @author: alexandercddev
 * @description: 
 * @date: 30/Septiembre/2021
**/
import React, {useEffect} from 'react';
import '../assets/sass/effects.scss'; 
import { useForm } from '../hooks/useForm';

export const FormWithCustomHook = () => {
    const [formValues, handleInputChange] = useForm({
        name: '',
        email: '',
        password: ''
    });
    const { name, email, password } = formValues;

    useEffect(() => {
        console.log('email change')
    }, [email])

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formValues)
    } 
    return (
        <form onSubmit={handleSubmit} className="animate__animated animate__backInDown">
            <h1>Form with custom hook </h1>
            <hr/>
            <div className="form-group">
                <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Your name"
                    autoComplete="off"
                    value={name}
                    onChange={handleInputChange}
                />
            </div>
            <div className="form-group">
                <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="example@example.com"
                    autoComplete="off"
                    value={email}
                    onChange={handleInputChange}
                />
            </div> 
            <div className="form-group">
                <input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="Password"
                    autoComplete="off"
                    value={password}
                    onChange={handleInputChange}
                />
            </div> 
            <button type="submit" className="btn btn-primary">
                    Guardar
            </button> 
        </form>
    )
};

export default FormWithCustomHook;
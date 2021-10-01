/** 
 * @author: alexandercddev
 * @description: 
 * @date: 30/Septiembre/2021
**/
import React, { useState, useEffect } from 'react';
import '../assets/sass/effects.scss';
import Message from './Message';

export const SimpleForm = () => {
    const [formState, setFormState] = useState({
        name: '',
        email: ''
    });
    const { name, email } = formState;
    const handleInputChange = ({target}) => { 
        setFormState({
            ...formState,
            [target.name]: target.value
        });
    };

    useEffect(() => {
        //console.log('hey');
    }, []);

    useEffect(() => {
        //console.log('Change formState');
    }, [formState]);

    useEffect(() => {
        //console.log('Change name');
    }, [name]);

    useEffect(() => {
        //console.log('Change email');
    }, [email]);

    return (
        <div className="animate__animated animate__backInDown">
            <h1>Effects Hook</h1>
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
            {name === 'Diana' && (
                <Message />
            )}
        </div>
    )
};

export default SimpleForm;
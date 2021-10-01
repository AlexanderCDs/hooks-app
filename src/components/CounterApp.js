/** 
 * @author: alexandercddev
 * @description: 
 * @date: 30/Septiembre/2021
**/
import React, { useState } from 'react';
import '../assets/sass/CounterApp.scss';

export const CounterApp = () => {
    const [state, setState] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30, 
    });
    const {counter1, counter2} = state;
    const handleAdd = () => {
        setState( state => (
            {
                ...state,
                counter1: counter1 + 1, 
            }
        ))
    }

    return (
        <>
            <h1>Counter1: { counter1 }</h1>
            <h1>Counter2: { counter2 }</h1>
            <hr/>
            <div className="stats">
                <button 
                    className="btn btn-primary"
                    onClick={() => handleAdd('counter1')}
                >
                    + 1
                </button>  
            </div>
            <code>{JSON.stringify(state)}</code>
        </>
    )
};

export default CounterApp;
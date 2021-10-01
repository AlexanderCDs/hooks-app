/** 
 * @author: alexandercddev
 * @description: 
 * @date: 30/Septiembre/2021
**/
import React from 'react'; 
import { useCounter } from '../hooks/useCounter';

export const CounterWithCustomHook = () => { 

    const {state, increment, decrement, reset} = useCounter(100);

    return (
        <>
            <h1>Counter with custom hook</h1>
            <h1>Counter { state }</h1>
            <hr></hr>
            <div className="stats">
                <button 
                    className="btn btn-primary" 
                    onClick={increment}
                >
                    + 1
                </button>
                <button 
                    className="btn btn-primary" 
                    onClick={reset}
                >
                    Reset
                </button>
                <button 
                    className="btn btn-primary" 
                    onClick={decrement}
                >
                    - 1
                </button>   
            </div> 
        </>
    )
};

export default CounterWithCustomHook;
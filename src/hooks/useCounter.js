/** 
 * @author: alexandercddev
 * @description: 
 * @date: 30/Septiembre/2021
**/
import { useState } from 'react';

export const useCounter = (inicialState = 10) => {
    const [counter, setCounter] = useState(inicialState);
    const increment = () => setCounter( counter + 1);
    const decrement = () => setCounter( counter - 1);
    const reset = () => setCounter(inicialState);

    return {
        counter,
        increment,
        decrement,
        reset
    }
}
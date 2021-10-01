/** 
 * @author: alexandercddev
 * @description: 
 * @date: 30/Septiembre/2021
**/
import { useState } from 'react';

export const useCounter = (inicialState = 10) => {
    const [state, setState] = useState(inicialState);
    const increment = () => setState( state + 1);
    const decrement = () => setState( state - 1);
    const reset = () => (inicialState !== state) && setState(inicialState);

    return {
        state,
        increment,
        decrement,
        reset
    }
}
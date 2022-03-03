/** 
 * @author: alexandercddev
 * @description: 
 * @date: 04/Octubre/2021
**/
import React, { useState } from 'react'
import { useCounter } from '../hooks/useCounter';
import { Small } from './Small';

export const Memorize = () => {
    const {  counter, increment } = useCounter( 10 );
    const [show, setShow] = useState(true);

    return (
        <div className="animate__animated animate__backInDown">
            <h1>
                Counter: <Small value={counter} />
            </h1>
            <hr />
            <button
                className="btn btn-primary"
                onClick={increment}
            >
                + 1
            </button>
            <button
                className="btn btn-primary mt-2"
                onClick={() =>{
                    setShow(!show)
                }}
            >
                Show/Hide {JSON.stringify(show)}
            </button>
        </div>
    )
}

export default Memorize;

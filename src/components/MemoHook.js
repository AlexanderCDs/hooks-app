/** 
 * @author: alexandercddev
 * @description: 
 * @date: 04/Octubre/2021
**/
import React, { useMemo, useState } from 'react'
import { useCounter } from '../hooks/useCounter'; 

export const MemoHook = () => {
    const { state: counter, increment } = useCounter( 5000 );
    const [show, setShow] = useState(true);

    const processHeavy = (iteration) => {
        for(let i = 0; i < iteration; i++){
            console.log('Let´s Go...');
        }
        return `${iteration} iteraciones realizadas.`;
    }

    const memoHeavy = useMemo(() => processHeavy(counter), [counter]);

    return (
        <div className="animate__animated animate__backInDown">
            <h1>Memo Hook</h1>
            <h3>
                Counter: <small >{counter}</small> 
            </h3>
            <hr />
            <p> { memoHeavy } </p>
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

export default MemoHook;

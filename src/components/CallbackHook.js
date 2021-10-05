/** 
 * @author: alexandercddev
 * @description: 
 * @date: 04/Octubre/2021
**/
import React, { useCallback, useState } from 'react'
import ShowIncrement from './ShowIncrement';

export const CallbackHook = () => {
    const [counter, setCounter] = useState( 10 );
    //const increment = () => setCounter( counter + 1 ); 

    const increment = useCallback ( (number) => {
        setCounter( c => c + number );
    }, [ setCounter ]);

    return (
        <div className="animate__animated animate__backInDown">
            <h1>useCallback Hook</h1>
            <h3> Counter: { counter } </h3>
            <hr />
            <ShowIncrement increment={increment} />
        </div>
    )
}

export default CallbackHook;

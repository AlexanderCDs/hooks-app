/** 
 * @author: alexandercddev
 * @description: 
 * @date: 04/Octubre/2021
**/
import React, { useCallback, useState } from 'react'
import Child from './Child' 

export const Father = () => {

    const numeros = [2, 4, 6, 8, 10];
    const [valor, setValor] = useState(0);

    //const incrementar = ( num ) => setValor( valor + num );

    const incrementar = useCallback( (number) => {
        setValor( v => v + number)
    }, [setValor]);

    return (
        <div className="animate__animated animate__backInDown">
            <h1>Padre</h1>
            <p> Total: { valor } </p>

            <hr />

            {
                numeros.map( n => (
                    <Child 
                        key={ n }
                        numero={ n }
                        incrementar={ incrementar }
                    />
                ))
            }
            {/* <Hijo /> */}
        </div>
    )
}

export default Father;
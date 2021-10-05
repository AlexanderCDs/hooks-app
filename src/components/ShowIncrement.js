/** 
 * @author: alexandercddev
 * @description: 
 * @date: 04/Octubre/2021
**/
import React from 'react'

export const ShowIncrement = React.memo(({ increment }) => {
    console.log("Me estrese y me volví a generar")
    return (
        <button
            className='btn btn-primary'
            onClick={ () => {
                increment(5);
            }}
        >
            Increment
        </button>
    )
})

export default ShowIncrement;

/** 
 * @author: alexandercddev
 * @description: 
 * @date: 04/Octubre/2021
**/
import React from 'react'

export const Child = React.memo(({ numero, incrementar }) => {

    console.log('  Me volví a generar :(  ');

    return (
        <button
            className="btn btn-primary mb-2"
            onClick={ () => incrementar( numero ) }
        >
            { numero }
        </button>
    )
})

export default Child;

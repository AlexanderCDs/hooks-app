/** 
 * @author: alexandercddev
 * @description: 
 * @date: 04/Octubre/2021
**/
import React, { memo } from 'react'

export const Small = memo(({value}) => {
    console.log('Me renderice de nuevo, me va dar ansiedad!!')
    return (
        <small>
            {value}
        </small>
    )
})

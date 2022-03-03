/** 
 * @author: alexandercddev
 * @description: 
 * @date: 30/Septiembre/2021
**/   
import React, { useLayoutEffect, useRef, useState } from 'react'
import { useFetch } from '../hooks/useFetch';
import { useCounter } from '../hooks/useCounter';

export const Layout = () => {
    const { counter, increment, decrement } = useCounter(1);
    const { data } = useFetch(`https://www.breakingbadapi.com/api/characters/${counter}`); 
    const { img } = !!data && data[0]; // !!null == false, !null == true
    
    const imageRef = useRef();
    const [boxSize, setBoxSize] = useState({});
    
    useLayoutEffect(() => {
        setBoxSize(imageRef.current.getBoundingClientRect())
    }, [img])

    return (
        <div className="animate__animated animate__backInDown">
            <h1 style={{display: 'flex', justifyContent: 'center'}}> Layout Effect </h1>
            <div className="card" style={{width: '100%'}}>
                <img src={img} className="card-img-top" alt="..." ref={imageRef}/> 
                <code>
                    <pre>
                        {JSON.stringify(boxSize, null, 3)}
                    </pre>
                </code>
                <div className="stats ">
                    {counter > 1 && (
                        <button 
                            className="btn btn-primary m-2" 
                            onClick={decrement}
                        >
                            Prev
                        </button>  
                    )}
                    
                    <button 
                        className="btn btn-primary m-2" 
                        onClick={increment}
                    >
                        Next
                    </button>  
                </div>
            </div>
        </div>
    )
}

export default Layout;
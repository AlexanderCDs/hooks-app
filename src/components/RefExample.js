/**
 * @author: alexandercd
 * @description: 
 * @date: 03/octubre/2021
 * **/
import React, {useState} from 'react';
import { MultipleCustomHooks } from './MultipleCustomHooks'; 

const RefExample = () => { 
    const [show, setShow] = useState(false);
    return (
        <div className="animate__animated animate__backInDown">
            <h1>Ref Example</h1> 
            <hr></hr>
            {show && (
                <MultipleCustomHooks />
            )}
            
            <button 
                className="btn btn-primary mt-2"
                onClick={ () => {
                    setShow(!show)
                }}
            >
                Show/Hide
            </button>
        </div>
    )
}

export default RefExample

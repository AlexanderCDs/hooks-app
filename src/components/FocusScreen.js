/**
 * @author: alexandercd
 * @description: 
 * @date: 03/octubre/2021
 * **/
import React, { useRef } from 'react'

const FocusScreen = () => { 
    const inputRef = useRef(); 
    const handleClick = () => {
        inputRef.current.select()
    }
    return (
        <div className="animate__animated animate__backInDown">
            <h1>Focus Screen</h1>
             
            <hr></hr>

            <input 
                ref={inputRef}
                className="form-control"
                placeholder="Your name"
            />

            <button 
                className="btn btn-outline-primary mt-2"
                onClick={handleClick}
            >
                Focus
            </button>
        </div>
    )
}

export default FocusScreen

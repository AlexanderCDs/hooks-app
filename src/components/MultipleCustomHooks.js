/** 
 * @author: alexandercddev
 * @description: 
 * @date: 30/Septiembre/2021
**/   
import React from 'react'
import { useFetch } from '../hooks/useFetch';
import { useCounter } from '../hooks/useCounter';

export const MultipleCustomHooks = () => {
    const { state: counter, increment, decrement } = useCounter(1);
    const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/characters/${counter}`); 
    const { name, occupation, img, status, nickname } = !!data && data[0]; // !!null == false, !null == true
    
    return (
        <div className="animate__animated animate__backInDown">
            <h1>Breaking Bad API</h1>
            <div className="card" style={{width: '100%'}}>
                {loading ? (   
                    <div className="alert alert-info text-center">
                        Loading...
                    </div>
                ) : (

                    <>
                        <img src={img} className="card-img-top" alt="..." />
                        <div className="card-body" style={{color: '#000'}}>
                            <div className="card-title" >
                                <h4>
                                    {name} 
                                </h4>
                               
                                
                            </div> 
                            <p className="card-text">
                                {`Nickname: ${nickname}`}
                            </p> 
                            <p className="card-text">
                                Status: <span className={`badge rounded-pill bg-${status === 'Alive' ? 'primary' : 'danger'}`}>{ status }</span>
                            </p> 
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Occupation</li>
                            {occupation.map( (value, index) => (
                                <li key={'item-'+index} className="list-group-item">{ value }</li>
                            ))} 
                        </ul>
                    </>
                )} 
                <div className="stats">
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

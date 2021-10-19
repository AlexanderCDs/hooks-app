/** 
 * @author: alexandercddev
 * @description: 
 * @date: 30/Septiembre/2021
**/   
import { useState, useEffect, useRef } from "react";

export const useFetch = (url) => {
    const isMounted = useRef(true);
    const [state, setState] = useState({
        data: null,
        loading: true,
        error: null
    });

    useEffect(() => {
        return () =>{
            isMounted.current = false;
        }
    }, [])

    useEffect(() => {
        setState({
            data: null,
            loading: true,
            error: null
        });
        fetch( url )
            .then(response => response.json() )
            .then ( data => {
                if( isMounted.current ){
                    setState({
                        data,
                        loading: false,
                        error: null
                    });
                } 
            })
            .catch( () => {
                setState({
                    data: null,
                    loading: false,
                    error: 'Not load information'
                })
            }); 
    }, [url]);

    return state;
}

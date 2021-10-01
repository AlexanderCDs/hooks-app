/** 
 * @author: alexandercddev
 * @description: 
 * @date: 30/Septiembre/2021
**/
import React, {useState, useEffect} from 'react'

export const Message = () => {

    const [coors, setCoors] = useState({x: 0, y: 0}) 
    useEffect(() => {
        const mouseMove = (e) => {
            const coors = {x: e.x, y: e.y}; 
            setCoors(coors)
        }; 
        window.addEventListener('mousemove', mouseMove);

        return () => {
            window.removeEventListener('mousemove', mouseMove);
        }
    }, []);

    return (
        <div>
            <h3>Eres genial!</h3>
            <p>
                <code>{JSON.stringify(coors)}</code>
            </p>
        </div>
    )
}

export default Message;

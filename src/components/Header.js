/** 
 * @author: alexandercddev
 * @description: 
 * @date: 04/Octubre/2021
**/
import React from 'react'
import { Link } from 'react-router-dom'; 
import { options } from '../utils/information';

export const Header = () => {
    return (
        <header>
            {options.map( (item, index) => (
                <Link key={`link-${index}`} to={item.to} className="btn btn-outline-primary mb-2" >
                    {item.text}
                </Link>
            ))} 
        </header>
    )
}

export default Header;

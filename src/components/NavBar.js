/** 
 * @author: alexandercddev
 * @description: 
 * @date: 04/Octubre/2021
**/
import React from 'react'
import { Link } from 'react-router-dom'; 
import { options } from '../utils/information';

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {options.map( (item, index) => (
                            <li className="nav-item" key={`link-${index}`} >
                                <Link  
                                    
                                    to={item.to} 
                                    className="nav-link" 
                                >
                                    {item.text}
                                </Link>
                            </li>
                        ))}  
                    </ul> 
                </div>
            </div>
        </nav>
    );
}

export default NavBar;

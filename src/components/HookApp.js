/** 
 * @author: alexandercddev
 * @description: 
 * @date: 30/Septiembre/2021
**/
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { options } from '../utils/information';
import NavBar from './NavBar';  

export const HookApp = () => {
    return (
        <div className="container-div">
            <NavBar />
            <main > 
                <Switch>  
                    {options.map( (item, index) => (
                        <Route key={`route-${index}`} exact path={item.to} component={item.component}></Route>  
                    ))}
                    <Redirect to="/" />
                </Switch>
            </main>
        </div>
    )
};

export default HookApp;
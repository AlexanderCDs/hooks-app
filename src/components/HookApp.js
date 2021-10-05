/** 
 * @author: alexandercddev
 * @description: 
 * @date: 30/Septiembre/2021
**/
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { options } from '../utils/information';
import Header from './Header';

export const HookApp = () => {
    return (
        <div className="container-div">
            <Header />
            <main > 
                <Switch> 
                    {options.map( (item, index) => (
                        <Route key={`route-${index}`} exact path={item.to} component={item.component}></Route>  
                    ))}
                </Switch>
            </main>
        </div>
    )
};

export default HookApp;
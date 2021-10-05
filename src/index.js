/** 
 * @author: alexandercddev
 * @description: 
 * @date: 30/Septiembre/2021
**/
import React from 'react';
import ReactDOM from 'react-dom';  
import { BrowserRouter } from 'react-router-dom';
import './assets/sass/index.scss'; 
import HookApp from './components/HookApp'; 

ReactDOM.render(
  <BrowserRouter> 
    <HookApp />
  </BrowserRouter>,
  document.getElementById('root')
); 
/** 
 * @author: alexandercddev
 * @description: 
 * @date: 30/Septiembre/2021
**/
import React from 'react';
import ReactDOM from 'react-dom';  
import './assets/sass/index.scss';
//import FormWithCustomHook from './components/FormWithCustomHook';
import { MultipleCustomHooks } from './components/MultipleCustomHooks';
//import HookApp from './components/HookApp';
//import CounterApp from './components/CounterApp';
//import CounterWithCustomHook from './components/CounterWithCustomHook';
//import SimpleForm from './components/SimpleForm';

ReactDOM.render(
  <React.StrictMode> 
    <MultipleCustomHooks />
  </React.StrictMode>,
  document.getElementById('root')
); 
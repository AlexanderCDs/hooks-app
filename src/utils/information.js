/** 
 * @author: alexandercddev
 * @description: 
 * @date: 04/Octubre/2021
**/
import Father from '../components/Father';
import CallbackHook from '../components/CallbackHook';
import MemoHook from '../components/MemoHook';
import Memorize from '../components/Memorize';
import Layout from '../components/Layout';
import FocusScreen from '../components/FocusScreen';
import RefExample from '../components/RefExample';
import FormWithCustomHook from '../components/FormWithCustomHook';
import MultipleCustomHooks from '../components/MultipleCustomHooks'; 
import CounterApp from '../components/CounterApp';
import CounterWithCustomHook from '../components/CounterWithCustomHook';
import SimpleForm from '../components/SimpleForm'; 
import ToDoReducer from '../components/ToDoReducer';

export const options = [
    {
        to: '/',
        text: 'ToDo App',
        component: ToDoReducer 
    },
    {
        to: '/father',
        text: 'Father',
        component: Father 
    },
    {
        to: '/callback-hook',
        text: 'Callback Hook',
        component: CallbackHook
    },
    {
        to: '/memo-hook',
        text: 'Memo Hook',
        component: MemoHook
    },
    {
        to: '/memorize',
        text: 'Memorize',
        component: Memorize 
    },
    {
        to: '/layout',
        text: 'Layout',
        component: Layout
    },
    {
        to: '/focus-screen',
        text: 'Focus Screen',
        component: FocusScreen
    },
    {
        to: '/ref-example',
        text: 'Ref Example',
        component: RefExample
    },
    {
        to: '/form-with-custom-hook',
        text: 'Form With Custom Hook',
        component: FormWithCustomHook
    },
    {
        to: '/multiple-custom-hooks',
        text: 'Multiple Custom Hooks',
        component: MultipleCustomHooks
    },
    {
        to: '/counter-app',
        text: 'Counter App',
        component: CounterApp
    },
    {
        to: '/counter-with-custom-hook',
        text: 'Counter With Custom Hook',
        component: CounterWithCustomHook
    },
    {
        to: '/simple-form',
        text: 'Simple Form',
        component: SimpleForm
    },

]
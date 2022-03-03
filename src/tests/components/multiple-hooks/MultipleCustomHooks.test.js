import React from 'react';
import {shallow} from 'enzyme';
import MultipleCustomHooks from '../../../components/MultipleCustomHooks'
import { useFetch } from '../../../hooks/useFetch';
import { useCounter } from '../../../hooks/useCounter';
jest.mock('../../../hooks/useFetch');
jest.mock('../../../hooks/useCounter');

describe('Test in MultipleCustomHooks', () => {
    useCounter.mockReturnValue({
        counter: 10, 
        increment: () => {},
        decrement: () => {}
    });

    test('should show sucess', () => {
        useFetch.mockReturnValue({
            data: null,
            loading: true,
            error: null
        });
        const wrapper = shallow(<MultipleCustomHooks/>);
        expect(wrapper).toMatchSnapshot();
    });

    test('should show info', () => {
        useFetch.mockReturnValue({
            data: [{
                name: 'Alexander', 
                occupation: ['dev'], 
                img: '#', 
                status: 'Alive', 
                nickname: 'alexandercddev'
            }],
            loading: false,
            error: null
        });
        const wrapper = shallow(<MultipleCustomHooks/>);
        expect(wrapper.find('.alert').exists()).toBe(false);  
        expect(wrapper.find('.nickname').text().trim()).toBe('Nickname: alexandercddev');
        expect(wrapper.find('h4').text().trim()).toBe('Alexander');
        console.log(wrapper.html())
    });
})
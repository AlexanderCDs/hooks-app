/**
 * @author: alexandercd
 * @description: 
 * @date: 18/octubre/2021
**/
import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import RefExample from '../../components/RefExample';

describe('Test <RefExample />', () => {
   
    const wrapper = shallow( <RefExample />);

    test('should show success', () => { 
        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('MultipleCustomHooks').exists() ).toBe( false );
    });

    test('should show component <MultipleCustomHooks />', () => {

        wrapper.find('button').simulate('click');
        expect( wrapper.find('MultipleCustomHooks').exists() ).toBe( true );
    });
});

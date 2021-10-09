import React from 'react';
import { shallow } from 'enzyme';
import { Small } from '../components/Small';

describe('Test <Samll />', () => {
    test('should show success', () => {
        const wrappeer = shallow(<Small value="Hola" />)
        expect( wrappeer ).toMatchSnapshot();
    })
    
})

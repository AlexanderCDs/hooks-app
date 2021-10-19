/** 
 * @author: alexandercddev
 * @description: 
 * @date: 14/octubre/2021
**/
import { renderHook, act } from '@testing-library/react-hooks';
import { useForm } from '../../hooks/useForm';

describe('Test in useForm', () => {
    const initialForm = {
        name: 'alexandercddev',
        email: 'alexandercd@hotmail.com'
    };

    test('should return values default', () => {
        
        const { result } = renderHook( () => useForm(initialForm) );
        const [ values, handleInputChange, rest] = result.current;

        expect( values ).toBe( initialForm );
        expect( typeof handleInputChange ).toBe( 'function' );
        expect( typeof rest ).toBe( 'function' ); 
    });
    
    test('should change value form name', () => { 
        const { result } = renderHook( () => useForm(initialForm) ); 
        const [ , handleInputChange] = result.current; 

        act( () => {
            handleInputChange( { 
                target: { 
                    name: 'name', 
                    value: 'Diana Sillas' 
                }
            });
        });

        const [ values ] = result.current;

        expect( values ).toEqual( {...initialForm, name: 'Diana Sillas'} );
 
    }); 

    test('should reset values form', () => { 
        const { result } = renderHook( () => useForm(initialForm) ); 
        const [ , handleInputChange, reset] = result.current; 

        act( () => {
            handleInputChange( { 
                target: { 
                    name: 'name', 
                    value: 'Diana Sillas' 
                }
            });

            reset();
        });

        const [ values ] = result.current;

        expect( values ).toEqual( initialForm );
 
    }); 
    
});

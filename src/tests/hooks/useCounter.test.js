/** 
 * @author: alexandercddev
 * @description: 
 * @date: 14/octubre/2021
**/
import { renderHook, act } from '@testing-library/react-hooks';
import { useCounter } from "../../hooks/useCounter";


describe('Test useCounter', () => {
    const value = 100;

    test('should return values default', () => {
        
        const { result } = renderHook( () => useCounter() );

        expect( result.current.state ).toBe( 10 );
        expect( typeof result.current.increment ).toBe( 'function' );
        expect( typeof result.current.decrement ).toBe( 'function' );
        expect( typeof result.current.reset ).toBe( 'function' );
    });

    test('should counter 100', () => {  
        const { result } = renderHook( () => useCounter(value) );

        expect( result.current.state ).toBe( value );  
    });
    
    test('should increment in 1', () => {
        const { result } = renderHook( () => useCounter(value) );
        const { increment } = result.current;

        act( () => {
            increment();
        });


        const { state } = result.current; 
        expect( state ).toBe( 101 );

    });


    test('should decrement in 1', () => {
        const { result } = renderHook( () => useCounter(value) );
        const { decrement } = result.current;

        act( () => {
            decrement(); 
        });  

        const { state } = result.current; 
        expect( state ).toBe( 99 );

    });

    test('should reset default value ', () => {
        const { result } = renderHook( () => useCounter(value) );
        const { decrement, reset } = result.current;

        act( () => {
            decrement(); 
            reset();
        });   

        const { state } = result.current; 
        expect( state ).toBe( value );
    });
    
});

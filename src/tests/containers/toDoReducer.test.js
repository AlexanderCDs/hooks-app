/** 
 * @author: alexandercddev
 * @description: 
 * @date: 18/Octubre/2021
**/
import { toDoReducer } from "../../containers/toDoReducer";
import { demoTools } from "../fixtures/demoTodos";

describe('Test in toDoReducer', () => {
    test('should return default state ', () => {
        const state = toDoReducer( demoTools, {});

        expect( state ).toEqual( demoTools );
    }); 

    test('should add TODO ', () => {
        const state = toDoReducer( demoTools, {}); 
        //expect( state ).toEqual( demoTools );
    }); 
});

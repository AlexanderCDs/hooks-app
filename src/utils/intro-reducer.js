/** 
 * @author: alexandercddev
 * @description: 
 * @date: 06/Octubre/2021
**/
const initialState = [{
    id: 1,
    all: 'Buy Bread',
    done: false,
}];

const allReducer = (state = initialState, action) => {
    if(action?.type === 'add') {
        return [ ...state, action.payload ];
    }
    return state;
}

let all = allReducer();

const newAll = {
    id: 2,
    all: 'Buy milk',
    done: false,
}

const action = {
    type: 'add',
    payload: newAll
}

all = allReducer(all, action);

console.log(all);
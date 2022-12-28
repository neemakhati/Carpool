import { createStore } from 'redux';

const reducerFn = (state = { location: null, requiredSeat: null}, action) => {
    switch (action.type) {
        case 'location':
            return {...state, location: action.payload}
        case 'requiredSeat':
            return {...state, requiredSeat: action.payload}
    }
    return state;
}

const store = createStore(reducerFn);
export default store;
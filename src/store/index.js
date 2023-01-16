import { createStore } from 'redux';

const reducerFn = (state = { location: null, requiredSeat: null}, action) => {
    switch (action.type) {
        case 'location':
            return {...state, location: action.payload}
        case 'requiredSeat':
            return {...state, requiredSeat: action.payload}
        case 'info':
            return {...state, info: action.payload}
        case 'uid':
            return {...state, uid: action.payload}
    }
    return state;
}

const store = createStore(reducerFn);
export default store;
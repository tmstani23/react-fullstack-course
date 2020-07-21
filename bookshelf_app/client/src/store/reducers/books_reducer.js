import {ADD_BOOK} from '../types';

export default (state={}, action) => {
    switch(action.type) {
        case ADD_BOOK:
            return {...state, add: action.payload}

        default: 
            return state;
    }
}
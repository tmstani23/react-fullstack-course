import {ADD_BOOK, GET_BOOK, UPDATE_BOOK, CLEAR_BOOK} from '../types';

//Book reducers to add or clear a book in the store
export default (state={}, action) => {
    switch(action.type) {
        case ADD_BOOK:
            return {...state, addBook: action.payload}
        case UPDATE_BOOK:
            return {...state, updateBook: action.payload}
        //overwites the add property to null based on the past in action
        case CLEAR_BOOK:
            return {
                ...state, 
                addBook: action.payload, 
                singleBook: action.payload, 
                updateBook: action.payload
            }

        case GET_BOOK:
            return {...state, singleBook: action.payload}

        default: 
            return state;
    }
}
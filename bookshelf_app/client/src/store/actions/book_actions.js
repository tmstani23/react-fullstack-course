import axios from 'axios';
import {ADD_BOOK, CLEAR_BOOK, GET_BOOK} from '../types';

// function that posts the book data to the backend api 
    // and returns the response and type to the reducer
export function addBook(book) {
    const request = axios.post('/api/books/book', book)
        .then((response)=> response.data)
    
    return {
        type: ADD_BOOK,
        payload: request
    }
}

export function getBook(bookId) {
    //ex url: /api/books/book?id=5f17308410451329ec006551
    
    const request = axios.get(`/api/books/book?id=${bookId}`)
        .then((response)=> {
            return response.data
        }).catch((err) => {
            return false
        })
    
    return {
        type: GET_BOOK,
        payload: request
    }
}

//Sends a null payload to the reducer to reset the book in the redux store
export function clearBook(book){
    return {
        type: CLEAR_BOOK,
        payload: null
    }
}
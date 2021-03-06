import axios from 'axios';
import {ADD_BOOK, UPDATE_BOOK, CLEAR_BOOK, GET_BOOK, GET_BOOKS} from '../types';


// function that posts the book data to the backend api 
    // and returns the response and type to the reducer
export function addBook(book) {
    const request = axios.post('/api/books/book', book)
        .then((response) => response.data)
    
    return {
        type: ADD_BOOK,
        payload: request
    }
}

export function getBooks(
    limit=50,
    start = 0,
    order = 'asc',
    list
){
    const request = axios.get(`/api/books/all_books?limit=${limit}&skip=${start}&order=${order}`)
        .then((response) => {
            //if a list was passed in add the response data to it else just return the data
            return list ? [...list, ...response.data] : response.data
        })

        return {
            type: GET_BOOKS,
            payload: request
        }
}

export function editBook(book) {
    //  /api/books/book
    const request = axios.patch('/api/books/book', book)
        .then(response => response.data)
        return {
            type: UPDATE_BOOK,
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
export function clearBook(){
    return {
        type: CLEAR_BOOK,
        payload: null
    }
}
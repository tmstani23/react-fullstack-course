import axios from 'axios';
import {ADD_BOOK} from '../types';

export function addBook(book) {
    const request = axios.post('/api/books/book', book)
        .then((response)=> response.data)
    
    return {
        type: ADD_BOOK,
        payload: request
    }
}
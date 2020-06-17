import {MOVIES_LIST} from '../types';
import axios from 'axios';


export function getMoviesList() {
    //Go to db and get data
    const request = axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((res) => res.data)

    return {
        type: MOVIES_LIST,
        payload: request
        
    }
}
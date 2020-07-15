import axios from 'axios';
import {USER_LOGIN} from '../types';

/////USER ACTIONS//////
//post the user to the login backend api route
export function loginUser({email, password}) {
    const request = axios.post('/api/users/login', {email,password})
        .then(response => response.data);
    //return type and payload for redux
    return {
        type: USER_LOGIN,
        payload: request
    }
}
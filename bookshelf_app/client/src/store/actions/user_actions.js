import axios from 'axios';
import {USER_LOGIN, USER_AUTH, USER_LOGOUT, GET_USERS, USER_REGISTER} from '../types';

/////USER ACTIONS//////
//post the user to the login backend api route and return the action type and data payload
export function loginUser({email, password}) {
    const request = axios.post('/api/users/login', {email,password})
        .then(response => response.data);
    //return type and payload for redux
    return {
        type: USER_LOGIN,
        payload: request
    }
}

//auth action that gets the auth status from the backend api route
export function auth() {
    const request = axios.get('/api/users/auth')
        .then(response => response.data)

    return {
        type: USER_AUTH,
        payload: request
    }
}

//post the user to the login backend api route and return the action type and data payload
export function logoutUser() {
    const request = axios.get('/api/users/logout')
        .then(response => {
            return null
        });
    //return type and payload for redux
    return {
        type: USER_LOGOUT,
        payload: request
    }
}

export function getUsers() {
    const request = axios.get('/api/users/all_users')
        .then(response => response.data);

    return {
        type: GET_USERS,
        payload: request
    }
}

export function userRegister(user, userList) {
    
       
    const request = axios.post('/api/users/register', user)
        .then(response => {

            let data = response.data;
            let users = data.success === true ? [...userList, data.user] : userList
            
            let finalResponse = {
                success: data.success,
                error: data.error,
                users
            }
            return finalResponse;
    });

    return {
        type: USER_REGISTER,
        payload: request
    }


}
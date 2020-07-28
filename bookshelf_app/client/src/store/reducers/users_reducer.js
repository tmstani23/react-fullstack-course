import {USER_LOGIN, USER_AUTH, USER_LOGOUT, GET_USERS} from '../types';

//User reducers used to update redux store after action is dispatched
export default (state={}, action) => {
    switch(action.type) {
        //if type is user user_login return the current state and updated // auth and userData to the redux store
        case USER_LOGIN:
            return {
                ...state,
                auth: action.payload.auth,
                userData: action.payload.userData,
            
            }
        case USER_LOGOUT:
            return {
                ...state,
                auth: action.payload,
                userData: false,
            
            }
        //send the current auth and userdata state to the redux store if they exist
        case USER_AUTH:
            return {
                ...state,
                auth: action.payload.auth ? action.payload.auth : false,
                userData: action.payload.userData ? action.payload.userData : false,
            
            }
        case GET_USERS:
            return {
                ...state,
                auth: action.payload.auth ? action.payload.auth : false,
                users: action.payload ? action.payload : false
            
            }
        
        default: 
            return state;
    }
}
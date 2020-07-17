import {USER_LOGIN, USER_AUTH, USER_LOGOUT} from '../types';

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
            break;
        case USER_LOGOUT:
            return {
                ...state,
                auth: action.payload,
                userData: false,
            
            }
            break;
        //send the current auth and userdata state to the redux store if they exist
        case USER_AUTH:
            return {
                ...state,
                auth: action.payload.auth ? action.payload.auth : false,
                userData: action.payload.userData ? action.payload.userData : false,
            
            }
        
        default: 
            return state;
    }
}
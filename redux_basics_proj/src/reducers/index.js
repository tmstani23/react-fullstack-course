import {combineReducers} from 'redux';
import movies from './movies_reducer';

//Combine all reducer files into one root reducer so redux can access
const rootReducer = combineReducers({
    // movies is set as the name of the reducer in the Redux store
    movies,  
})

export default rootReducer;
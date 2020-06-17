import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getMoviesList} from './actions';

const Hooks = () => {
    //useSelector is a redux hooks method similar to useState but uses redux store
        //Has similar effect to mapStateToProps
    //Don't need to use connect, mapState, or mapDispatch using this redux hooks method
    const movies = useSelector(state => state.movies);
    const dispatch = useDispatch();

    
    useEffect(() => {
        dispatch(getMoviesList())
    },[dispatch]);

    //console.log(movies);
    
    return (
        <>
            <div>
                Hooks Comp
                {/* <button onClick={() => dispatch(getMoviesList())}>
                    Get Movies
                </button> */}
                {console.log(movies)}
            </div>
        </>
    )
}


export default Hooks;
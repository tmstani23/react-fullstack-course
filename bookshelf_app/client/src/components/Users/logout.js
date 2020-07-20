import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {logoutUser} from '../../store/actions/user_actions'

const Logout = (props) => {
    //useSelector allows extracting data from store.
    //similar to mapStateToProps functionality
    const logoutSelector = useSelector(state => state.user);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(logoutUser())
    }, [dispatch])

    useEffect(() => {
        //If the user has logged out 
            //redirect them to home route after 2 seconds
        if(logoutSelector.auth=== null) {
            setTimeout(() => {
                props.history.push('/')
            }, 2000)
        }
    }, [dispatch, logoutSelector, props.history])


    return (
        <div className='logout_container'>
            <h1>
                You're gone buddy.
            </h1>
        </div>
    )
}

export default Logout;

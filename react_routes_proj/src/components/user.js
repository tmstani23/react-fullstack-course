import React, {Fragment} from 'react';
import UserHoc from '../components/high_order/user_hoc';
//Note: props not available in user component unless passed to user through its wrapper component(UserHoc)
const User = (props) => {
    console.log(props)
    return (
        <Fragment>
            <div>User</div>
        </Fragment>
    )
}

const User2 = (props) => {
    console.log(props)
    return (
        <Fragment>
            <div>User2</div>
        </Fragment>
    )
}
//UserHoc is exported and passed the user component where it is then rendered.
//Can pass multiple components, args and functions as needed
export default UserHoc(User, User2, 'Hello I am');
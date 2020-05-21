import React, { Fragment } from 'react';
import {Link} from 'react-router-dom';

const Profile = (props) => {
    
    console.log(props);
    return (
        <Fragment>
            <h3>Profile comp</h3>
            {/* props contains history information from the link
                The path is set to the current comp url + /posts
                If the core profile link in the app.js isn't set to app 
                it will render the posts component instead of what should be at /profile/posts url
            */}
            <Link to={{
                pathname: `${props.match.url}/posts`
            }}>Go to posts</Link>
        </Fragment>
    )
}

export default Profile;
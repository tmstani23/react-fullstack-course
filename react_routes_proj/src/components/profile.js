import React, { Fragment } from 'react';
import {Link} from 'react-router-dom';
import Card from '../components/high_order/card';
import Auth from '../components/high_order/auth';

//Deprecated demonstration code for redirects
// const Profile = (props) => {
    
//     const redirectUser = () => {
//         // Example using React Redirect component to redirect user to home component
//         // const userRedirect = false;

//         // if(userRedirect === true) {
//         //     return (
//         //     <Redirect to='/' />
//         //     )
//         // } 
//         //Another way of redirecting the user to home without using redirect component
//         props.history.push('/')
//     }

//     console.log(props);
//     return (
//         <Fragment>
//             <h3>Profile comp</h3>
//             {/* props contains history information from the link
//                 The path is set to the current comp url + /posts
//                 If the core profile link in the app.js isn't set to app 
//                 it will render the posts component instead of what should be at /profile/posts url
//             */}
//             {redirectUser ()}
//             <Link to={{
//                 pathname: `${props.match.url}/posts`
//             }}>Go to posts</Link>
//         </Fragment>
//     )
// }

const Profile = (props) => {
    return (
      <Fragment>
        {/* Wrapping components allows use of props.children to render child components */}
        <Auth>
            <Card> 
                <Link
                    to={{
                        pathname: `${props.match.url}/posts`,
                    }}
                >
                    Go to posts
                </Link>
            </Card>
        </Auth>
        
      </Fragment>
    );
}

export default Profile;
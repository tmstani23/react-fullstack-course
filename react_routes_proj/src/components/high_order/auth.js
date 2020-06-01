import React from 'react';

//High order component using conditional rendering 
//to decide on when to render child components
const Auth = (props) => {
    const pass = 'pass123';
    //leave message or render child components if pass is correct
    if(pass != 'pass123') {
        return <h3>You are not authorized.</h3>
    } else {
        return props.children
    }
}

export default Auth;
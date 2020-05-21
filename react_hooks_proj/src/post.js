import React, {useEffect} from 'react';

const Post = ({item}) => {
    
    useEffect(() => {
        console.log('Post created');

        //Using a return function within useEffect fires only when component is unmounted
        return () => {console.log("component unmounted")} 
    }, []); //If the dependency array is empty return function fires on unmount else every time useEffect is called

    return (
        <div>
            <h3>{item.name}</h3>
            <p>{item.body}</p>
            <hr/>
        </div>
    )
}

export default Post;
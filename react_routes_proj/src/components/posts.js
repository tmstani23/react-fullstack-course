import React, { Fragment } from 'react';
import {Link} from 'react-router-dom';

// const Posts = () => {
    
//     const ids = [
//         {id:1, name: "Post 1"},
//         {id:2, name: "Post 2"},
//         {id:3, name: "Post 3"}
//     ]
//     //old way required return to be within parenthesis
//     const list = ids.map((item) => (
//         <div key={item.id}>
//             <Link to={`/posts/${item.id}`}>{item.name}</Link> 
//         </div>
//     ))

//     return (
//         <Fragment>
//             {list}
//         </Fragment>
//     )
// }

const Posts = () => {
    
    const ids = [
        {id:1, name: "Post 1"},
        {id:2, name: "Post 2"},
        {id:3, name: "Post 3"}
    ]

    //Can also return arrays directly
    return [
      <div key='1'>
        item1
      </div>,
      <div key='2'>
        item2
      </div>,
      <div key='3'>
        item3
      </div>,
    ];
        
    
}

export default Posts
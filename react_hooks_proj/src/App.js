import React, { Fragment, useState } from 'react';


const App = ({initialCount}) => {
  //useState is an array that contains the input params and a state updater function
  //component automatically rerenders whenever useState state object is updated

    //Destructure array into its value object and  dispatch function
  let [state, updateState] = useState({
    count: initialCount,
    name: "Tim"

  }); //can name dispatch function anything in this case 'updateState'

  //Create new hook array containing posts and a hook function for updating them.
  let [posts, setPosts] = useState([
    {
      name: "Super awesome post",
      body: "This is the best post ever"
    },
  ])

  //console.log(useState);
  
  //hook function that decrements the count value in the hook state obj
  const subtOne = () => {
    //Using dispatch function as a method allows access to previous state object
    updateState((prevState) => {
      return {...prevState, count: state.count - 1} // ... syntax returns all other properties in the obj
    });
  }

  //hook function that adds a new post to the existing posts state
  const addOnePost = () => {
    let newPost = {
      name: 'super awesome new post',
      body: 'im a body with no head!'
    }
    console.log(posts);
    //Here the dispatch hook function is used.
      //It is passed the hook array of posts and the new post
      //The new post is concatenated into the posts state hook
    setPosts([
      ...posts,
      newPost
    ])
  }

  
  return (
    <Fragment>
      {/* state hook object can be accessed to display name and count */}
      <h1>{state.name}</h1>
      <h3>Count: {state.count}</h3>
      {/* updateState hook is used to add 1 to the count */}
      <button onClick={() => updateState({...state,count: state.count + 1})}>Add one</button>
      <button onClick={subtOne}>Subtract one</button>
      <button onClick={() => updateState({...state,count: initialCount})}>reset</button>
      <br/>
      <hr/>
      {/* posts hook array is accessed to display post data as jsx */}
      {
        posts.map((post, i) => (
          <div key={i}>
            <h3>{post.name}</h3>
            <p>{post.body}</p>
            <hr/>
          </div>
        ))
      }
      {/* new post is added to the hook posts array and displayed */}
      <button onClick={addOnePost}>
        Add a post
      </button>
      

    </Fragment>
  )
}

export default App;

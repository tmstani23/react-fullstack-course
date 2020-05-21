import React, {Fragment} from 'react';
//BR knows what's happening in the browser html history
//Route knows which component to display from the history
import {BrowserRouter, Link, Route} from 'react-router-dom';
import Home from './components/home';
import Profile from './components/profile';
import Posts from './components/posts';


const App = () => {
  return (
    <BrowserRouter>
    <header>
      {/* using an a tag here for a link will not work and will cause the browser to rerender the page */}
      <Link to='/'>Go to home page</Link> <br/>
      {/* can pass an object containing url params that will be added to the url */}
      <Link to={{
        pathname: '/profile',
        hash: '#Tim',
        search: '?profile=true'
      }}>Go to profile page</Link> <br/>
      <Link to='/posts'>Go to posts page</Link> <br/>
      <hr/>
    </header>
    {/* the "exact" flag means it will only route to the exact path*/}
      <Route path="/" component={Home} exact /> 
      <Route path="/posts" component={Posts} exact/>
      <Route path="/profile" component={Profile} exact/>
    </BrowserRouter>
      
  )
}


export default App;

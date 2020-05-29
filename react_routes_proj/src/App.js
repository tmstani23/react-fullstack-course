import React from 'react';
//BR knows what's happening in the browser html history
//Route knows which component to display from the history
import {BrowserRouter, Link, NavLink, Route, Switch} from 'react-router-dom';
import Home from './components/home';
import Profile from './components/profile';
import Posts from './components/posts';
import PostItem from './components/post_item';
import NotFound from './components/page_not_found';
import Conditional from'./components/conditional';


const App = () => {
  return (
    //Browser router allows url based routing and captures the browser route history.
    <BrowserRouter>
      <header>
        <div className="d-flex flex-column flex-md-row align-item-center p-3 px-md-4 mb-3 border-bottom">
          <h5 className="my-0 mr-md-auto font-weight-normal">My App</h5>
          <nav className="my-2 my-md-o mr-md-3">
            {/* using an a tag here for a link will not work and will cause the browser to rerender the page.  React links allow for cached routing. */}
          {/* Nav links allow for active classes and styles.  The "exact" flag means it will only route to the exact path */}
          <NavLink 
            to='/' 
            className='p-2 text-dark'
            activeClassName='selected'
            activeStyle={{fontWeight: 'bold'}}
            exact
          > 
              Home page
          </NavLink> 
          <Link to='/profile' className='p-2 text-dark'>Profile page</Link> 
          <Link to='/posts' className='p-2 text-dark'>Posts page</Link> 
          <Link to='/conditional' className='p-2 text-dark'>Conditional page</Link> 
          </nav>
        </div>
        
      </header>
      
      <div className='container'>
        {/* Switch allows for order based route rendering.  It will render the route based in the order it appears within the switch component.  Use most specific routes first and end with base home route */}
        <Switch>
          {/* The route path is the url location.  
          It doesn't need to match the same name as the component path location. */}
          
          {/* <Redirect from='/profile' to='/posts' /> */}
          {/* :id allows for dynamic url params.  The route can be accessed by putting in the url address with an id at the end. */}
          <Route path="/posts/:id" component={PostItem} />
          <Route path="/posts" component={Posts}/>
          <Route path="/profile" component={Profile} />
          <Route path="/conditional" component={Conditional} />
          {/* exact here means only render this comp at the exact route path */}
          <Route path="/" component={Home} exact/> 
          {/* If none of the above routes exist go to the notFound component */}
          <Route component={NotFound} /> 
        </Switch>
        
      </div>
      
    </BrowserRouter>
      
  )
}


export default App;

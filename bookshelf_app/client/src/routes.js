import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Users/login';
import Logout from './components/Users/logout';
//HOC components
import Auth from './hoc/auth';
import MainLayout from './hoc/main_layout';
//Admin components
import Admin from './components/Users/Admin';
import AddPosts from './components/Users/Admin/Posts/add_post';
import EditPost from './components/Users/Admin/Posts/edit_post';
import AdminPosts from './components/Users/Admin/Posts/posts';
import Article from './components/Article';
import Register from './components/Users/register';

const Routes = () => {
    return (
        <BrowserRouter>
            <MainLayout>
                <Switch>
                    <Route path='/admin/posts/edit/:id' component={Auth(EditPost, true)} /> 
                    <Route path='/admin/posts/create' component={Auth(AddPosts, true)} /> 
                    <Route path='/admin/posts' component={Auth(AdminPosts, true)} /> 
                    <Route path='/article/:id' component={Auth(Article)} />                    
                    <Route path='/admin' component={Auth(Admin, true)} />
                    <Route path='/register' component={Register} /> 
                    <Route path='/logout' component={Auth(Logout, true)} /> 
                    {/* if user is already logged in don't reload component*/}
                    <Route path='/login' component={Auth(Login, false)} /> 
                    <Route path='/' component={Auth(Home)} /> 
                </Switch> 
            </MainLayout>    
        </BrowserRouter>
    )
}

export default Routes;
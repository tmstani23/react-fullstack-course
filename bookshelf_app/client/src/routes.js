import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import Home from './components/Home';
import MainLayout from './hoc/main_layout';
import Login from './components/Users/login';

const Routes = () => {
    return (
        <BrowserRouter>
        <MainLayout>
            <Switch>
                <Route path='/login' component={Login} /> 
               <Route path='/' component={Home} /> 
            </Switch> 
        </MainLayout>    
        </BrowserRouter>
    )
}

export default Routes;
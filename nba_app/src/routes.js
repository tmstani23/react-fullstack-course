import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './components/home';
import Footer from './components/footer.js';
import Header from './components/header.js';

const Routes = () => {
    return (
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route path ="/" component={Home} />
            </Switch>
            <Footer/>
        </BrowserRouter>
    )
    
}

export default Routes;
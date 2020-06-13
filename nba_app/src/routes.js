import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './components/home';
import Footer from './components/footer.js';
import Header from './components/header.js';
import Article from './components/articles';
import Teams from './components/teams';

const Routes = () => {
    return (
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route path ="/article/:id" component={Article} />
                <Route path ="/teams" component={Teams} />
                <Route path ="/" component={Home} />
            </Switch>
            <Footer/>
        </BrowserRouter>
    )
    
}

export default Routes;
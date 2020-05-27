import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Header from './components/header';
import Home from './components/home/';
import Artist from './components/artist/';

const Routes = () => {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                {/* dynamic url to artist component based on artist id */}
                <Route path='/artist/:artistId' component={Artist}/>
                <Route path='/' component={Home}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;
import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Header from './components/header';

const Routes = () => {
    return (
        <BrowserRouter>
            <Header />
        </BrowserRouter>
    )
}

export default Routes;
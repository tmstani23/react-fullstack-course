import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.css';

import Header from './components/header';
import NewsList from './components/news_list';

const App = () => {
    return (
        //Can only render single element
            //JSX translated into javascript > creates dom node
        //Fragments are new in React and provide a standard way to encapsulate JSX code
            //Used instead of old div container method
        <Fragment> 
            <Header />
            <NewsList /> 
        </Fragment>
            
        
        
    )
}

ReactDOM.render(<App />, document.getElementById('root'));

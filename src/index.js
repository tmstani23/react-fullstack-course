import React, { Fragment, Component } from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.css';
import JSON_DB from './db.json';

import Header from './components/header';
import NewsList from './components/news_list';
import Footer from './components/footer';


class App extends Component {
    state = {
        news: JSON_DB,
        footerText: "I am a happy footer"
    }
    
    render() {
        //console.log(this.state.news);
        return (
            //Can only render single element
                //JSX translated into javascript > creates dom node
            //Fragments are new in React and provide a standard way to encapsulate JSX code
                //Used instead of old div container method
            <Fragment> 
                <Header />
                <NewsList news={this.state.news} > 
                    {/* code nested within component passed as props */}
                    {/* accessible via props.children in component. */}
                    <h3>I am a child of NewsList component</h3>
                    <h3>I am a child of NewsList component</h3>
                </NewsList>
                <Footer footerText = {this.state.footerText} />
            </Fragment>

        )
    }
    
}

ReactDOM.render(<App />, document.getElementById('root'));

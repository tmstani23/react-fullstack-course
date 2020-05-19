import React, { Fragment, Component } from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.css';
import JSON_DB from './db.json';

import Header from './components/header';
import NewsList from './components/news_list';
//import Footer from './components/footer';
import LifeCycles from './components/life_cycles'


class App extends Component {
    
    state = {
        news: JSON_DB,
        filteredNews: [],
        footerText: "I am a happy footer",
        visible: true

    }

    getKeywords = (event) => {
        let inputKeyword = event.target.value;
        let filteredNews = this.state.news.filter((item) => {
            //return indexes of all news items whose titles match keyword
            return item.title.indexOf(inputKeyword) > -1
        })
        //console.log(filteredNews)
        this.setState({filteredNews})
    }

    toggleLifeComp = () => {
        this.setState({visible: !this.state.visible})
    }
    
    render() {
        //console.log(this.state.news);
        return (
            //Can only render single element
                //JSX translated into javascript > creates dom node
            //Fragments are new in React and provide a standard way to encapsulate JSX code
                //Used instead of old div container method
            <Fragment> 
                <Header getKeywords={this.getKeywords} />
                <NewsList news={
                        this.state.filteredNews.length === 0 
                            ? this.state.news 
                            : this.state.filteredNews
                    } 
                > 
                    {/* code nested within component passed as props */}
                    {/* accessible via props.children in component. */}
                    <h3>I am a child of NewsList component</h3>
                    <h3>I am a child of NewsList component</h3>
                </NewsList>
                <button onClick={this.toggleLifeComp}>Toggle Lifecycle Component</button>
                {this.state.visible === true ? <LifeCycles /> : null}
                
                {/* <Footer footerText = {this.state.footerText} /> */}
            </Fragment>

        )
    }
    
}

ReactDOM.render(<App />, document.getElementById('root'));

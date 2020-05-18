import React, { Fragment } from 'react';
import NewsItem from './news_item'

const NewsList = (props) => {
    
    //can use destructuring on props to return only needed items
    let {news} = props;
    

    const newsMap = news.map((item, i) => 
        (
            <NewsItem item = {item} key={item.id}/> 
        )
    )
    //console.log(newsMap);
    return (
        
        <Fragment>
            {newsMap}
            {/* {props.children} */}
            
        </Fragment>
            
    )
}

export default NewsList;
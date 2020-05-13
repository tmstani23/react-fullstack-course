import React, { Fragment } from 'react';
import NewsItem from './news_item'

const NewsList = () => {
    return (
        
        <Fragment>
            News list component
            <NewsItem />
            <NewsItem />
            <NewsItem />
        </Fragment>
            
    )
}

export default NewsList;
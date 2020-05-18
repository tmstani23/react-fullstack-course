import React from 'react';
//import {css} from 'glamor';

const NewsItem = (props) => {
    const {item} = props;

    //Adding styles using glamor library
    // let news_item_styles = css({
    //     padding: '20px',
    //     boxSizing: 'border-box',
    //     borderBottom: '1px solid grey'
    // })
    // //Can add hover and media query rules within css object
    // let item_back_hover = css({
    //     background: 'light-grey',
    //     ':hover': {
    //         color: 'purple'
    //     },
    //     '@media(max-width: 420px)': {
    //         color: 'blue'
    //     }
    // className={`${news_item_styles} ${item_back_hover}
    // })
    
    return (
        <div className='news_item'>
            <h3>{item.title}</h3>
            <div>
                {item.feed}
            </div>
        </div>
    )
}

export default NewsItem;
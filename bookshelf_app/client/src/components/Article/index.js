import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getBook, clearBook} from '../../store/actions/book_actions';

const Article = (props) => {
    
    const article = useSelector(state => state.books);
    const dispatch = useDispatch();
    const currentUser = useSelector(state => state.user)

    useEffect(() => {
        dispatch(getBook(props.match.params.id))
        //return function runs when component dismounts
        return (
            () => dispatch(clearBook())
        )
    }, [dispatch, props])
    
    const showArticle = () => {
        if(article.singleBook) {
            const singleArticle = article.singleBook;
            const user = currentUser.userData;
            return <div className='single_article_container'>
                <div className='top'>
                    <h3>{singleArticle.name}</h3>
                    <div><span>Author: </span>{singleArticle.author}</div>
                    <div><span>Rating: </span>{singleArticle.rating}</div>
                </div>
                <div className='content'>
                    <div 
                        className='article_content'
                        dangerouslySetInnerHTML={{__html: singleArticle.content}}
                    />
                    <div>
                        <i><span>Viewed by:</span> {`${user.name} ${user.lastname}`}</i>
                    </div>
                </div>
            </div>
        }
    }

    return (
        <div className='container'>
            {showArticle()}
            {
                article.singleBook === false
                    ? <div className='error_label'>Article id does not exist</div>
                    : null
            } 
        </div>
    )
}

export default Article;
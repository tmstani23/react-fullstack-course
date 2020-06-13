import React, {Fragment, useState, useEffect} from 'react';
import axios from 'axios';
import {URL_BLOCKS} from '../utils/paths';


const Article = (props) => {
    let [article, setArticle] = useState(null);
    
    //Passing props to useEffect forces the component to re-render whenever props are updated
    useEffect(() => {
            const fetchArticle = async () => {
                //get the article data from the db url by passing in the id from the url parameters
            const response = await axios.get(`${URL_BLOCKS}?id=${props.match.params.id}`)
            setArticle(...response.data);
        }
        fetchArticle();

    }, [props])

    console.log(article);

    return (
        <Fragment>
            <div className='container article_post'>
                { article 
                    ?   <div className='top'> 
                            <div 
                                className ='block_image'
                                style={{
                                    background: `url(/images/blocks/${article.image}) no-repeat`
                                }}
                            />
                            <h1>{article.title}</h1>
                            <span></span>
                            <div
                                className='article_content'
                                dangerouslySetInnerHTML={{__html: article.content}}
                            />
                            
                            
                            
                        </div>
                    :   null
                }
            </div>
        </Fragment>
    )  

}
    

export default Article;
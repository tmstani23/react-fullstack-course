import React, {Fragment, useState, useEffect} from 'react';
import axios from 'axios';
import {URL_BLOCKS} from '../utils/paths';
import { Link } from 'react-router-dom';

const HomeArticles = () => {
    
    let [articles, setArticles] = useState([]);

    useEffect(() => {
        const fetchArticles = async () => {
            // url params and limits are functionality of json_server
            const response = await axios.get(`${URL_BLOCKS}?_limit=6&_sort=id&_order=desc`)
            setArticles(response.data);
        }
        fetchArticles();
    }, [])

    const showArticleBlocks = () => {
        //Create a new array containing amount of rows dependent on the size of the articles array / 3
        const rows = [...Array(Math.ceil(articles.length / 3))];
        //Break up the articles array and save each set of 3 into a row
        const articleRows = rows.map(
            (row, i) =>  articles.slice(i * 3, i * 3 + 3)
        )
        //console.log(articleRows)
        const generatedArticles = articleRows.map((row, i) => (
            <div className='row' key={i}> 
                {
                    row.map(( article ) => (
                        <div 
                            key={article.id}
                            className='four columns block_item'
                        >
                            <Link to={`/article/${article.id}`}>
                                <div className='veil'/>
                                <div 
                                    className='block_image'
                                    style={{
                                        background: `url(/images/blocks/${article.image}) no-repeat`
                                    }}
                                >
                                </div>
                                <div className='content'> 
                                    <h3>{article.title}</h3>
                                    <div>{article.des}</div>
                                </div>
                            </Link>
                        </div>
    
                    ))
                }
            </div>
            
        ))
        return generatedArticles;
    }

    return (
        <div> {showArticleBlocks()} </div>
    )
    
    
}

export default HomeArticles;
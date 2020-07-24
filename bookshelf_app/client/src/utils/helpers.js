import React from 'react';
import {Link} from 'react-router-dom';

//Generate a rows array containing each article object
export const RowGenerator = (list, cols) => {
    //create an empty array with the # list items divided evenly into columns
    const rows = [...Array(Math.ceil(list.length/cols))]
    //map the list items into each row
    const articleRows = rows.map(
        (row, i) => (
            //cut the list into different objects based on number of columns
            list.slice( i * cols, i * cols + cols)
        )  
        
    )
    console.log(articleRows)
    return articleRows;
}

//Generates the rows and content block jsx
export const GenerateRowsWithBlocks = (rows, type) => (
    
    rows.map((row, i) => (
        <div className = 'row' key={i}>
            {
                row.map((article) => (
                    <div key={article.id} className={`${type} columns article_block`}>
                        <Link to={`/article/${article._id}`}>
                            <div className='top'>
                                <h3>{article.name}</h3>
                            </div>
                            <div className='content'>
                                <div><span>Author: </span>{article.author} </div>
                                <div><span>Our rating: </span>{article.rating}</div>
                                <div><span>Price: </span>{article.price}</div>
                            </div>
                        </Link>
                        
                    </div>

                ))
            }

        </div>
    ))
)
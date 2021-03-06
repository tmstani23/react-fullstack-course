import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getBooks} from '../../store/actions/book_actions';
import {RowGenerator, GenerateRowsWithBlocks} from '../../utils/helpers';

class Home extends Component {
    
    loadMore = () => {
        let bookList = this.props.books.collection;
        let count = bookList.length;
        //dispatch the next two posts and skip the previous 
        this.props.dispatch(getBooks(2, count, 'desc', bookList))
    }
    
    //creates a jsx grid of books from the books collection 
    showBooks = (books) => {
        if(books.collection) {
            const rowsArray = RowGenerator(books.collection, 2);
            const generatedArticles = GenerateRowsWithBlocks(rowsArray, 'six');
            //console.log(rowsArray);  
            return generatedArticles;
        }
        return false;
        
    }

    componentDidMount() {
        //get the books from redux store (limit, skip, order)
        this.props.dispatch(getBooks(6, 0, 'desc'))
    }
    
    render() {
        
        return (
            
            <div className='container'>
                <div className='row articles_container'>
                    {this.showBooks(this.props.books)}
                </div>
                <div onClick={this.loadMore} className='loadmore'>
                    Load More
                </div>
            </div>
        )
    } 
}

function mapStateToProps(state) {
    return {
        books: state.books
    }
}

export default connect(mapStateToProps)(Home);
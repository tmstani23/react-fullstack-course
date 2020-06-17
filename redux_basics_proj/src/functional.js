import React from 'react';
import {connect} from 'react-redux';
import {getMoviesList} from './actions';

//movies and getMoviesList function are deconstructed from the props
const Functional = ({movies, getMoviesList}) => {
    console.log(movies);
    
    return (
        <>
            <div>
                Functional comp
            </div>
            <button onClick={() => getMoviesList()}>
                Get Movies
            </button>
        </>
        
    )
}
// mapStateToProps is used for selecting the part of the data from the store that the connected component needs. It’s frequently referred to as just mapState for short.

//     It is called every time the store state changes.
//     It receives the entire store state, and should return an object of data this component needs.

const mapStateToProps = state => ({
    movies: state.movies
})
//mapping to props allows direct access of the dispatch function 
const mapDispatchToProps = {getMoviesList};

export default connect(mapStateToProps, mapDispatchToProps)(Functional);
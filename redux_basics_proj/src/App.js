import React, {Component} from 'react';
import {connect} from 'react-redux'; //Serves as a bridge between react component and redux store
import {getMoviesList} from './actions';
import {bindActionCreators} from 'redux';

class App extends Component {
  
  componentDidMount() {
    //Dispatch is a redux function for calling specific redux actions
    //this.props.dispatch(getMoviesList()); //used without mapDispatchToProps
    
    //can call action directly if using redux mapDispatchToProps method
    this.props.getMoviesList();
  }

  render() {
    //Props passed by redux map function available in App
    console.log(this.props);

    return (
      <div className="App">
        {this.props.movies 
          ? 
            this.props.movies.map((item) => (
            <div key={item.id}>
              {item.name}
            </div>
            ))
          : null
        }
      </div>
    );
  }
  
}


//Have access to entire state through redux store
const mapStateToProps = state => ({
  movies: state.movies
})

//Function that binds the dispatch method to specific actions and returns them
function mapDispatchToProps(dispatch) {
  return bindActionCreators({getMoviesList}, dispatch)
}
//connect allows mapState function to inject state as props into App.
//mapDispatchToProps must be second argument in connect method
export default connect(mapStateToProps, mapDispatchToProps)(App);

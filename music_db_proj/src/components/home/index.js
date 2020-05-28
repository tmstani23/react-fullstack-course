import React, {Component, Fragment} from 'react';
import Banner from './banner';
import axios from 'axios';
import ArtistLinkList from './artist_list';

const URL_ARTISTS = 'http://localhost:3004/artists';

class Home extends Component {
    
    state = {
        artists: []
    }

    componentDidMount() {
        //get the json from local server and update state with artist info
        axios.get(URL_ARTISTS)
            .then(response => {
                this.setState({
                    artists: response.data
                })
            })
    }
    
    render () {
        
        return (
            <Fragment>
                <Banner />
                <ArtistLinkList allArtists={this.state.artists} />
            </Fragment>
        )
    }
}

export default Home;
import React, { useState, useEffect } from "react";
import axios from 'axios';
import {Link} from 'react-router-dom';
import ArtistAlbumGrid from './artist_album_grid';

let REQ_URL = 'http://localhost:3004/artists';

const Artist = (props) => {
    
    const [artist, setArtist] = useState('');
    

    useEffect(() => {
        //Fetch json data using artist id from props
        axios.get(`${REQ_URL}/${props.match.params.artistId}`)
        .then(response => {
            //useState dispatch function called to save data into artist
            setArtist(response.data);
            //console.log(response.data)
        }).catch(error => {
            props.history.push('/home')
        })
    }, [props]) //component will rerender only on props update
    
    
    return (
        <div className='artist_bio'>
            <div className='avatar'>
                <span  style={{
                    background: `url("/images/covers/${artist.cover}.jpg") no-repeat`
                }}>
                </span>
                <div className='bio'>
                    <h3>{artist.name}</h3>
                    <div className='bio_text'>
                        {artist.bio}
                    </div>
                </div>
                <ArtistAlbumGrid artistAlbums={artist.albums}/>
                <Link to='/artist/2'>Load next artist</Link>
                
            </div>
           
        </div>
    )
}

export default Artist;
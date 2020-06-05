import React from 'react';
import {Link} from 'react-router-dom';

const ArtistLinkList = ({allArtists}) => {
    // props are destructured into allArtists
    
    const mapArtistList = (values) => (
        values ?
            values.map((artist) => (
                // when user clicks the link go to artist url based on its id
                <Link 
                    key={artist.id}
                    to={`/artist/${artist.id}`}
                    className='artist_item'
                    style={{
                        background: `url('/images/covers/${artist.cover}.jpg')`
                    }}
                >
                    <div>
                        {artist.name}
                    </div>
                </Link>
            ))
        : null
    )

    return (
        <div className='artists_list'>
            <h4>Browse the artists</h4>
            <div className='artist_container'>
                {mapArtistList(allArtists)}
            </div>

        </div>
    )
}

export default ArtistLinkList;
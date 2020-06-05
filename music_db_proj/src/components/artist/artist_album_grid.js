import React from 'react';

const ArtistAlbumGrid = ({artistAlbums}) => {
    
    const mapAlbums = (albumArr) => (
        albumArr ? 
            albumArr.map((album, i) => (
                <img 
                    key={i}
                    src={`/images/albums/${album.cover}.jpg`}
                    alt=''
                ></img>
                
                
            ))
        : null
    )
    
    return (
        <div className='albums_list'>
            {mapAlbums(artistAlbums)}
        </div>

    )
}

export default ArtistAlbumGrid;
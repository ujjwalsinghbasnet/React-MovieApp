import React from 'react'

function SingleMovie({data,isMovie}) {
    const {title,original_name,poster_path,vote_average,genres,overview,release_date,backdrop_path,first_air_date} = data;
    const IMG_URL = 'https://image.tmdb.org/t/p/original';

    let ind_genre = '';

    genres ? ind_genre = genres.map((genre) => <Genres  genre = {genre.name}  key={genre.id}/>) : ind_genre = '' ;
  
    const backStyle = {
        background: `url(${IMG_URL + backdrop_path}) 50% 50%`,
        backgroundSize: 'cover'
    }
    return (
        <div className='movie_body' style = {backStyle}>
            <div className = 'movie_poster'>
                <img src={`${IMG_URL + poster_path}`} alt={title} />
            </div>
            <div className='movie_details'>
                <h3 className='movie_title'>{isMovie?title:original_name}</h3>
                <div className='movie_genre'>{ind_genre}</div>
                <span className='movie_releaseDate'>Released: {isMovie?release_date:first_air_date}</span>
                <span className='movie_rating'>Rating: {vote_average}</span>
                <div className='movie_desc'>{overview}</div>

            </div>
        </div>
    )
} 
function Genres ({ genre }){
    let display = '';
    if(genre) {
        display = genre;
    }
    return(
        <div className='genre'>
            {display}
        </div>
    )
}

export default SingleMovie;
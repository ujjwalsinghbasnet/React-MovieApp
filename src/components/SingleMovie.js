import React from 'react'


function SingleMovie(props) {
    const {title,poster_path,vote_average,genres,overview,release_date,backdrop_path} = props.data;
    console.log(props)
    console.log(title,vote_average)
    const IMG_URL = 'https://image.tmdb.org/t/p/original';

    const ind_genre = genres.map((genre) => <Genres gen={genre.name} key={genre.id}/>)
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
                <h3 className='movie_title'>{title}</h3>
                <div className='movie_genre'>{ind_genre}</div>
                <span className='movie_releaseDate'>Released: {release_date}</span>
                <span clasName='movie_rating'>Rating: {vote_average}</span>
                <div className='movie_desc'>{overview}</div>

            </div>
        </div>
    )
} 
function Genres (props){
    console.log(props)
    return(
        <div className='genre'>
            {props.gen}
        </div>
    )
}

export default SingleMovie;
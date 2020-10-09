import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import API_KEY from '../apikey';
import IndividualCard from './IndividualCard';


function Header() {
//     // const [isLoading, setLoading] = useState(true);
//     // const [searchMovie,setMovie] = useState([]);
//     const [inputVal, setInputVal] = useState('');


//     const changeHandler = e => {
//         e.persist();
//         setInputVal(e.target.value);
//     }
//     const handleSubmit = e => {
//         e.preventDefault();
//         fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${inputVal}&page=1`)
//         .then(res => res.json())
//         .then(data => {
//             setLoading(false);
//             setMovie(data.results)
//         })
//     }

//     if(!isLoading) {
//         searchMovie.map(movie => <IndividualCard img={movie.poster_path} vote={movie.vote_average} title ={movie.title} name = {movie.original_name} key={movie.id} id={movie.id}/>)
//     }
    return (
        <div className = 'header'>
            <Link className='nav_links' to = '/'>Movie</Link>
            <Link className='nav_links' to = '/tv'>TV</Link>
            <Link className = 'button' to = '/search'>
                <button type = 'button'> Search </button>
            </Link>
        </div>
    )
}


export default Header;

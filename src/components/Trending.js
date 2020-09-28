import React, {useState, useEffect} from 'react'
import API_KEY from '../apikey';
import IndividualCard from './IndividualCard';

//api.themoviedb.org/3/trending/all/day?api_key=<<api_key>>

function Trending(){
    const [trending,setTrending] = useState({});
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true);
        fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}&language=en-US`)
        .then(res => res.json())
        .then(data => {
            setTrending(data.results);
            setLoading(false);
        })
    },[]);
    let movies = '';
    if(isLoading) {
        movies = 'Loading..........'
    } else {
        movies = trending.map((res) => <IndividualCard img={res.poster_path} vote={res.vote_average} title ={res.title} key={res.id} id={res.id}/>)
    }
    return (
        <div className = 'trending_section'>
            {movies}
        </div>
    )
}

export default Trending;
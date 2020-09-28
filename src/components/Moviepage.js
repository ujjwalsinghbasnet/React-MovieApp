import React,{useState,useEffect} from 'react';
import API_KEY from '../apikey';
import {useParams} from 'react-router-dom'
import SingleMovie from './SingleMovie';
// import IndividualCard from './IndividualCard';


function Moviepage(){
    const [movie,setMovie] = useState({})
    const [isLoading,setLoading] = useState(true)
    const {id} = useParams();

    useEffect(() => {
        setLoading(true); 
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`)
        .then(res => res.json())
        .then(data => {
            setMovie(data);
            setLoading(false);
        })
    },[])

    let movies = '';
    if(isLoading) {
       movies = 'Loading! Plz Wait'
    } else {
        movies = <SingleMovie data = {movie} />
    }

    return(
        // {movies}
        <div>{movies}</div>
    )
}

export default Moviepage;
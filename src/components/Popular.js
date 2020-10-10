import React, {useState, useEffect} from 'react'
import API_KEY from '../apikey';
import IndividualCard from './IndividualCard';
import InfiniteScroll from 'react-infinite-scroll-component'
import Header from './Header';
import {withRouter} from 'react-router'

function Trending({ url }){
    const [trending,setTrending] = useState({});
    const [isLoading, setLoading] = useState(true);
    const [page,setPage] = useState(1);

    const fetchData = function() {
        setLoading(true);
        fetch(`${url}/week?api_key=${API_KEY}&language=en-US&page=${page}`)
        .then(res => res.json())
        .then(data => {
            setTrending(prev => {
                if(Object.keys(prev).length === 0 ){ 
                    return {trending: data.results}
                 } else {
                    return { trending: [...prev.trending,...data.results] }
                 }
            });
            setLoading(false);
            setPage( prev => prev + 1);
        })
    }
    useEffect(() => {
        fetchData();
    },[]);

    let movies = '';
    if(isLoading) {
        movies = 'Loading..........'
    } else {
        movies = trending.trending.map((res) => <IndividualCard img={res.poster_path} vote={res.vote_average} title ={res.title} name = {res.original_name} key={res.id} id={res.id} url = {url}/>)
    }
    return (
        <div id = 'trending_section'> 
            <Header/>
            <InfiniteScroll
                dataLength={movies.length} 
                next={fetchData}
                hasMore={true}
                scrollThreshold ={"90%"}
                loader={<h4 style = {{ textAlign: 'center', color: 'white'}}>Loading......</h4>}
                endMessage={
                    <p style={{ textAlign: 'center' }}>
                    <b>Yay! You have seen it all</b>
                    </p>
                }>
                {movies}
            </InfiniteScroll>
        </div>
    )
}

export default withRouter(Trending);
import React from 'react'
import IndividualCard from './IndividualCard';



function Search () {

    const [val,setVal] = React.useState("");
    const [isLoading,setLoading] = React.useState(true);
    const [data,setData] = React.useState([])

    const fetchData = function() {
        setLoading(true);
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=817f9ef9ff44afaafd9b0bf0b2293763&query=${val}&page=1`)
        .then(res => res.json())
        .then(result => {
            
            if(result.total_results === 0) {
                alert("No results");
            } else {
                setData(result.results)
            }
            });
            setLoading(false);
        }

    const handleChange = (e) => {
        setVal(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        fetchData();
    }

    let movies = '';
    if(isLoading) {
        movies = `Loading! Please Wait!`
    } else {
        movies = data.map((res) => <IndividualCard img={res.poster_path} vote={res.vote_average} title ={res.title} name = {res.original_name} key={res.id} id={res.id}/>)
    }

    return (
        <>
            <div className = 'input'>
                <form onSubmit={handleSubmit}>
                    <input value = {val} onChange = {handleChange} />
                </form>
            </div>
            <div className='search'>
                {movies}
            </div>
        </>
    )
}

export default Search;
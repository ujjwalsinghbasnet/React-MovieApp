import React, {useRef,useEffect} from 'react'
import API_KEY from '../apikey'
import IndividualCard from './IndividualCard';


function Search () {

    const [val,setVal] = React.useState("");
    const [isLoading,setLoading] = React.useState(false);
    const [data,setData] = React.useState([])

    const fetchData = function() {
        setLoading(true);
        fetch(`https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&query=${val}&page=1`)
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
    const refContainer = useRef(null);

    useEffect(()=>refContainer.current.focus())

    let movies = '';
    if(isLoading) {
        movies = `Loading! Please Wait`
    } else {
        movies = data.map((res) => <IndividualCard img={res.poster_path} vote={res.vote_average} title ={res.title} name = {res.original_name} key={res.id} id={res.id} type = {res.media_type}/>)
    }
    return (
        <div className = 'SearchBody'>
            <div className = 'input'>
                <h2>Search Movies/TV shows!</h2>
                <form onSubmit={handleSubmit}>
                    <input value = {val} onChange = {handleChange} type = 'text' placeholder ='Search here' ref={refContainer}/>
                </form>
            </div>
            <div className='search'>
                {movies}
            </div>
        </div>
    )
}


// function IndividualSearchCard(props) {
//     const IMG_URL = 'https://image.tmdb.org/t/p/original';
//     const img_url = 'https://image.tmdb.org/t/p/original/3S9u9oMFEwvzt1OGSv9PBowzmiD.jpg';
//     let {img,vote,title,id,type} = props;
//     const elems = document.querySelectorAll('.card');
//     console.log(elems)
//     elems.forEach(card => console.log('hello'))
//     // elems[0].forEach(element => {
//     //     console.log(element)
//     // });
//     return (
//             <Link to = {`${type}/${id}`} style={{color: 'black'}} className='links'>
//                 <div className = 'card'>
//                     <div className = 'card_poster'>
//                         <img src = {img === null ? `${img_url}` :`${IMG_URL + img}`} alt = {`${title}`} />
//                     </div>
//                     <div className = 'above_poster'>
//                       <div className = 'card_title'>
//                           <h3>{title}</h3>
//                       </div>
//                       <span className = 'card_rating'>{vote}</span>
//                     </div>
//                 </div>
//             </Link>
//     )
// }
export default Search;
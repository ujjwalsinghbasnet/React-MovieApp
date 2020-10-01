import React from 'react';
import {Link} from 'react-router-dom';
import '../App.css'


function IndividualCard(props) {
    const IMG_URL = 'https://image.tmdb.org/t/p/original';
    let {img,vote,title,id,url,name} = props;
    const elems = document.querySelectorAll('.card');
        if(elems) {
          elems.forEach(element => {
            element.addEventListener('mouseover',() => {
              element.childNodes[1].style.display = 'flex'
            })
            element.addEventListener('mouseout',() => {
              element.childNodes[1].style.display = 'none'
            })
          });
        }
        let target = '';
        if(url === `https://api.themoviedb.org/3/trending/movie`){
          target = `/movies`
        } else {
          target = `/tv`;
          title = name;
        }
    return (
            <Link to = {`${target}/${id}`} style={{color: 'black'}} className='links'>
                <div className = 'card'>
                    <div className = 'card_poster'>
                        <img src = {`${IMG_URL + img}`} alt = {`${title}`} />
                    </div>
                    <div className = 'above_poster'>
                    <div className = 'card_title'>
                        <h3>{title}</h3>
                    </div>
                    <span className = 'card_rating'>{vote}</span>
                    </div>
                </div>
            </Link>
    )
}

export default IndividualCard;
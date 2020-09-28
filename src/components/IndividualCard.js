import React from 'react';
import {Link} from 'react-router-dom';
import '../App.css'


function IndividualCard(props) {
    const IMG_URL = 'https://image.tmdb.org/t/p/original';
    const {img,vote,title,id} = props;

    return (
            <Link to = {`/movies/${id}`} style={{color: 'black'}}>
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
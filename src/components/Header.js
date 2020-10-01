import React from 'react';
import {Link} from 'react-router-dom';


function Header() {

    return (
        <div className = 'header'>
            <Link className='nav_links' to = '/'>Movie</Link>
            <Link className='nav_links' to = '/tv'>TV</Link>
        </div>
    )
}


export default Header;

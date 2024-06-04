import React from 'react';
import './header.scss'
import Nav from '../Nav/Nav';
function Header(props) {
    return (
        <div className='headerContainer'>
            <Nav/>
        </div>
    );
}

export default Header;
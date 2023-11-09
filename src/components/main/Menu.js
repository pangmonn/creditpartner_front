import React from 'react';
import { Link } from 'react-router-dom';
import './styles/menu.css'

const Menu = () => {
    return (
        <div className='menu'>
            <span className='menus'><a href="https://silky-equinox-081.notion.site/About-us-44952eaf0e6541e0b4a130a23d8b27b4" target="_blank" rel="noopener noreferrer">about us</a></span>
            <Link to='/contact'>
                <span className='menus'>contact</span>
            </Link>
        </div>
    );
};

export default Menu;
import React from 'react';
import './styles/top.css'
import home from '../../images/home.png'
import { Link } from 'react-router-dom';

const imgstyle = {
    width: '30px',
    height: '30px',
    marginLeft: 'auto'
}

const Top = () => {
    return (
        <div className='mypageTop'>
            <Link to='/'>
                <img src={home} style={imgstyle} />
            </Link>
        </div>
    );
};

export default Top;
import React from 'react';
import './styles/top.css'
import logo from '../../images/logo.png'
import { Link } from 'react-router-dom';

const imgstyle = {
    width: '20px',
    height: '20px'
}

const Top = () => {
    return (
        <div className='creditsTop'>
            <div className='creditsTitle'>이수내역 입력하기</div>
            <Link to='/'>
                <img src={logo} style={imgstyle} />
            </Link>
        </div>
    );
};

export default Top;
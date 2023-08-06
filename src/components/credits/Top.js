import React from 'react';
import './styles/top.css'
import home from '../../images/home.png'
import { Link } from 'react-router-dom';

const imgstyle = {
    width: '30px',
    height: '30px'
}

const Top = () => {
    return (
        <div className='creditsTop'>
            <div className='creditsTitle'>이수내역 입력하기</div>
            <Link to='/'>
                <img src={home} style={imgstyle} />
            </Link>
        </div>
    );
};

export default Top;
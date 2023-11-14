import React from 'react';
import SupportPopUp from './SupportPopUp';
import './styles/top.css';
import home from '../../images/home.png';
import { Link } from 'react-router-dom';

const imgstyle = {
    width: '30px',
    height: '30px',
    marginLeft: 'auto'
};

const Top = () => {
    return (
        <div className='guideTop'>
            <div style={{display: 'flex'}}>
                <div className='guideTitle'>학과별 이수 가이드</div>
                <SupportPopUp />
            </div>
            
            <Link to='/'>
                <img src={home} style={imgstyle} alt="Home" />
            </Link>
        </div>
    );
};

export default Top;

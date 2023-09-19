import React from 'react';
import './styles/Header.css';
import home from "../../images/home.png";
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();

    const onClickHome = () => {
        navigate('/');
    }

    return (
        <div className='chatbotHeader'>
            <div className='empty'></div>
            <div className='titleText'>CREDIT PARTNER</div>
            <img className='headerimg' onClick={onClickHome} src={home} />
        </div>
    );
};

export default Header;
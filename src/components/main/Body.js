import React from 'react';
import  './styles/body.css'
import chatbotButton from '../../images/chatbotButton.png'
import student from '../../images/student.png'
import { Link } from 'react-router-dom';

const Body = () => {
    return (
        <div className='body'>
            <div className='box1'>
                <div className='boxTitle'>We'll be your <span className='colorBlue'> PARTNER</span></div>
                <div className='boxText'>
                    크레딧 파트너는 2025년부터 시행되는
                    <br/>
                    고교학점제에 대한 학생들의 혼란을 줄이고
                    <br/>
                    과목, 진로 선택에 도움을 주기 위해
                    <br/>
                    희망 진로에 따라 맞춤형 서비스를 제공합니다.
                    </div>
                {
                    (window.localStorage.length===0) ? (
                        <>
                            <Link to='/login'>
                                <img src={chatbotButton} className='chatbotButton' />
                            </Link>
                        </> 
                        )
                    :
                    (
                        <Link to='/chatbot'>
                            <img src={chatbotButton} className='chatbotButton' />
                        </Link>
                    )
                }
                
            </div>
            <img src={student} className='student' />
        </div>
    );
};

export default Body;
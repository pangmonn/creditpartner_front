import React from 'react';
import './styles/bar.css'
import { Link } from 'react-router-dom';

const colorBLUE = {
    color: '#1751EC',
};

const Bar = () => {
    return (
        <div className='bar'>
            <div className='menubar'>
                {
                    (window.localStorage.length===0) ? (
                    <>
                        <Link to='/login'>
                            <div className='menu1'>
                                <span style={colorBLUE}>이수내역 </span>
                                <span>입력하기</span>
                            </div>
                        </Link>
                    </> 
                    )
                :
                (
                    <>
                        <Link to='/credits'>
                        <div className='menu1'>
                            <span style={colorBLUE}>이수내역 </span>
                            <span>입력하기</span>
                        </div>
                        </Link>
                    </>
                )
                }
                <Link to='/major'>
                    <div className='menu2'>
                        <span style={colorBLUE}>학과정보 </span>
                        <span>둘러보기</span>
                    </div>
                </Link>
                    
            </div>
        </div>
    );
};

export default Bar;
import React from 'react';
import './styles/categorybar.css'

const CategoryBar = () => {
    return (
        <div className='categorybar'>
            <div className='barmenu'>분야</div>
            <div className='barmenu'>과목명</div>
            <div className='barmenu'>학점</div>
        </div>
    );
};

export default CategoryBar;
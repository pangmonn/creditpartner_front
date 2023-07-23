import React, { useState, useRef, useCallback } from 'react';
import CategoryBar from './CategoryBar';
import './styles/maincategory.css'
import SubjectList from './SubjectList';

const MainCategory = ({ subjects, onModifySubject ,onModifyClass, onModifyCredit }) => {
    
    return (
        <div className='maincategory'>
            <CategoryBar />
            <SubjectList subjects={subjects} onModifySubject={onModifySubject} onModifyClass={onModifyClass} onModifyCredit={onModifyCredit} />
        </div>
    );
};

export default MainCategory;
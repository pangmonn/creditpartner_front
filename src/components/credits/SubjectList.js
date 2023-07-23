import React from 'react';
import SubjectItem from './SubjectItem';
import './styles/subjectlist.css';

const SubjectList = ({ subjects, onModifySubject, onModifyClass, onModifyCredit }) => {
    return (
        <div className='subjectList'>
            {
            subjects.map(subject => (
                <SubjectItem subject={subject} key={subject.id} id={subject.id} onModifySubject={onModifySubject} onModifyClass={onModifyClass} onModifyCredit={onModifyCredit}  />
            ))}
        </div>
    );
};

export default SubjectList;
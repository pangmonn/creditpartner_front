import React from 'react';
import './styles/modifybar.css'

const ModifyBar = ({ onAddClass, onClearClass, onSubmitClass }) => {
    return (
        <div className='modifybar'>
            <div className='addClass'><span className='colorBLUE' onClick={onAddClass}>더 입력하기</span></div>
            <div className='clearClass'><span className='colorGRAY' onClick={onClearClass}>초기화</span></div>
            <div></div>
            <div className='submitClass'><span className='colorBLUE' onClick={onSubmitClass}>저장하기</span></div>
        </div>
    );
};

export default ModifyBar;
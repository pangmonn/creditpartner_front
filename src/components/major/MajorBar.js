import React from 'react';
import Select from 'react-select';
import './styles/baritem.css'

const fieldList = ['인문', '사회', '자연과학', '공학', '보건·의약학', '교육'];

const lineList = [
    ['언어∙문학', '인문과학'],
    ['상경', '광고언론정보', '사회과학', '법행정'],
    ['자연과학', '생활과학', '농림'],
    ['기계전자', '정보컴퓨터', '건축∙환경', '화학생명'],
    ['보건', '의약학'],
    ['교육']
];

const MajorBar = ({ majorOptions, majorSelected, onSelectMajor, fieldSelected, lineSelected }) => {
    // fieldSelected가 존재하면, fieldIndex를 저장
    const fieldIndex = fieldSelected ? fieldList.indexOf(fieldSelected.value) : 0;
    // lineSelected가 존재하면, lineIndex를 저장
    const lineIndex = lineSelected ? lineList[fieldIndex].indexOf(lineSelected.value) : 0;
    
    return (
        <div>
            <div className='barItem'>
                <Select
                    options={majorOptions[fieldIndex][lineIndex]}
                    value={majorSelected}
                    onChange={onSelectMajor}
                    placeholder="학과"
                    isSearchable={false}
                    isDisabled={!lineSelected}
                />
            </div>
            <br />
        </div>
    );
  };
  
  export default MajorBar;
import React from 'react';
import Select from 'react-select';
import './styles/baritem.css'

const fieldList = ['인문', '사회', '자연과학', '공학', '보건·의약학', '교육'];

const LineBar = ({ lineOptions, lineSelected, onSelectLine, fieldSelected }) => {
    // fieldSelected가 존재하면, fieldIndex를 저장
    const fieldIndex = fieldSelected ? fieldList.indexOf(fieldSelected.value) : 0;
    
    return (
        <div>
            <div className='barItem'>
                <Select
                    options={lineOptions[fieldIndex]}
                    value={lineSelected}
                    onChange={onSelectLine}
                    placeholder="계열"
                    isSearchable={false}
                    isDisabled={!fieldSelected}
                />
            </div>
            <br />
        </div>
    );
};

export default LineBar;
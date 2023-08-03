import React from 'react';
import Select from 'react-select';
import './styles/baritem.css'

const FieldBar = ({ fieldOptions, fieldSelected, onSelectField}) => {
    return (
        <div>
            <div className='barItem'>
                <Select
                    options={fieldOptions}
                    value={fieldSelected}
                    onChange={onSelectField}
                    placeholder="분야"
                    isSearchable={false}
                />
            </div>
            <br />
        </div>
    );
};

export default FieldBar;
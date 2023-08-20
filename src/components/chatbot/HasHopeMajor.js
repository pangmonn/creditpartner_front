import React, { useContext, useEffect, useRef, useState } from 'react';
import { MyContext } from './ChatbotTemplate';
import './styles/HasHopeMajor.css';

const HasHopeMajor = ({clickYES, clickNO}) => {
    const yes = useRef();
    const no = useRef();
    const [selectButton, setSelectButton] = useState(false);

    if(selectButton) {
        yes.current.disabled = true;
        no.current.disabled = true;
    }

    const onClickYES = (e) => {
        yes.current.style.backgroundColor = '#E7EDFD';
        yes.current.style.cursor = 'default';
        no.current.style.cursor = 'default';
        no.current.style.backgroundColor = 'white';
        setSelectButton(true);
        clickYES();
    }

    const onClickNO = (e) => {
        no.current.style.backgroundColor = '#E7EDFD';
        yes.current.style.cursor = 'default';
        no.current.style.cursor = 'default';
        yes.current.style.backgroundColor = 'white';
        setSelectButton(true);
        clickNO();
    }

    return (
        <div className='hasHopeMajor'>
            <div></div>
            <button className='hopeButton' onClick={onClickYES} ref={yes} disabled="">응, 있어</button>
            <button className='hopeButton' onClick={onClickNO} ref={no} disabled="">아니, 아직 없어</button>
            <div></div>
        </div>
    );
};

export default HasHopeMajor;
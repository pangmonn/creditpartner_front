import React, { useState } from "react";
import Modal from 'react-modal';
import './styles/modifybutton.css'
import modifyButton from "../../images/modifyButton.png"

const imgstyle = {
    width: '30px',
    height: '30px',
    marginLeft: 'auto'
}

// TEST(추천 과목)
const recommendSubject = ["화학Ⅱ", "물리학Ⅱ", "인공지능 기초"];

const ModifyButton = ({ ownSubjectList }) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const modalClose = () => {
    	setModalIsOpen(!modalIsOpen);
  	};

    return (
        <div>
            <button className="modifyButton" onClick={()=> setModalIsOpen(true)}>
                <img src={modifyButton} style={imgstyle} />
            </button>
            <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
                <div>- 추천 과목</div>
                <div style={{ display: "flex" }}>
                    {recommendSubject.map((subject, index) => (
                        <div key={index}>
                            <button>{subject}</button>
                        </div>
                    ))}
                </div>
                <br />

                <button>추가</button>
                <button>삭제</button>
                <br />

                <button onClick={modalClose}>닫기</button>
            </Modal>
        </div>
    );
};

export default ModifyButton;
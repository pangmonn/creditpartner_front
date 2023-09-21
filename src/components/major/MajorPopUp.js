import React, {useState} from "react";
import Modal from 'react-modal';
import './styles/majorpopup.css'

const MajorPopUp = ({department, descript, recommend, similar, general_credit, career_credit}) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const modalClose = () => {
    	setModalIsOpen(!modalIsOpen);
  	};
    
    return (
        <div>
            <button className="majorPopUpButton" onClick={()=> setModalIsOpen(true)}>학과 정보</button>
            <Modal className="majorPopUpContainer" isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
                    <div>
                        <div className="majorPopUpTop">
                            <div>{department}</div>
                            <button className="majorPopUpClose" onClick={modalClose}>닫기</button>
                        </div>
                        <div>
                            <div className="majorPopUpTitle">학과 설명</div>
                            <div className="majorPopUpContent">
                                {descript}
                            </div>
                            <br />

                            <div className="majorPopUpTitle">
                                이런 학생에게 추천해요
                                </div>
                            <ul 
                                className="majorPopUpContent"
                                style={{listStyle: 'decimal', listStylePosition: 'inside'}}      
                            >
                                {recommend.map((item, index) => (
                                    <div>
                                        <li key={index}>{item}</li>
                                        <br />
                                    </div>
                                ))}
                            </ul>
                            <br />

                            <div className="majorPopUpTitle">유사 학과</div>
                            <ul 
                                className="majorPopUpContent" 
                                style={{listStyle: 'square', listStylePosition: 'inside'}}  
                            >
                                {similar.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                            <br />

                            <div>
                            <div className="majorPopUpTitle">
                                추천하는 선택 과목
                            </div>
                                <div className="majorPopUpTitle-select">
                                    일반 선택
                                </div>
                                <ul 
                                    className="majorPopUpContent-select"
                                    style={{listStyle: 'square', listStylePosition: 'inside'}}    
                                >
                                    {general_credit.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                    <br />
                                </ul>

                                <div className="majorPopUpTitle-select">
                                    진로 선택
                                </div>
                                <ul 
                                    className="majorPopUpContent-select"
                                    style={{listStyle: 'square', listStylePosition: 'inside'}}  
                                >
                                    {career_credit.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </Modal>
        </div>
    )
}

export default MajorPopUp;
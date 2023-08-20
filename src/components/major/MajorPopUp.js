import React, {useState} from "react";
import Modal from 'react-modal';
import './styles/majorpopup.css'
// import departmentDetail from './departmentDetail.json'

const MajorPopUp = ({descript, recommend, similar, general_credit, career_credit}) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    // const matchingDepartment = departmentDetail.find((department) => department.majorNum === majorNum);
    // console.log(departmentDetail);

    const modalClose = () => {
    	setModalIsOpen(!modalIsOpen);
  	};
    

    return (
        <div>
            <button onClick={()=> setModalIsOpen(true)}>학과 정보</button>
            <Modal className="majorPopUpContainer" isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
                    <div>
                        <div className="majorPopUpTop">
                            <div>학과명</div>
                            <button className="majorPopUpClose" onClick={modalClose}>닫기</button>
                        </div>
                        <div className="majorPopUpContent">
                            <div className="majorPopUpTitle">- 학과 설명</div>
                            <div>
                                {descript}
                            </div>
                            <br />

                            <div className="majorPopUpTitle">- 이런 학생에게 추천해요</div>
                            <ul>
                                {recommend.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                            <br />

                            <div className="majorPopUpTitle">- 유사 학과</div>
                            <ul>
                                {similar.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                            <br />

                            <div>
                            <div className="majorPopUpTitle">
                                - 추천하는 선택 과목
                            </div>
                                <div className="majorPopUpTitle">
                                    ... 일반 선택
                                </div>
                                <ul>
                                    {general_credit.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                                <br />

                                <div className="majorPopUpTitle">
                                    ... 진로 선택
                                </div>
                                <ul>
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
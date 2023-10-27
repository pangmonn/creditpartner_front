import React, {useState, useEffect} from "react";
import Modal from 'react-modal';
import * as majorAPI from "./api/majorAPI";
import './styles/majorpopup.css'

const MajorPopUp = ({major_name, similar}) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    // major_name의 details
    const [details, setDetails] = useState({});

   // console.log(major_name);

    const descript = details.major_info || ""; // 학과 설명
    const recommend = details.kind_of_student || []; // 추천 학생
    const general_credit = details.class_basic || []; // 일반 선택 과목
    const career_credit = details.class_course || []; // 진로 선택 과목

    console.log(details);

    useEffect(() => {
        const fetchDetailsData = async () => {
            try {
                const detailData = await majorAPI.getMajor(major_name);
                console.log(detailData);

                if (detailData) {
                    setDetails(detailData);
                } else {
                    console.error("학과 정보를 찾을 수 없습니다.");
                }
            } catch (error) {
                console.error("학과 정보를 불러오는데 실패했습니다.", error);
            }
        };

        fetchDetailsData();
    }, [major_name]);

    const modalClose = () => {
    	setModalIsOpen(!modalIsOpen);
  	};
    
    return (
        <div>
            <button className="majorPopUpButton" onClick={()=> setModalIsOpen(true)}>학과 정보</button>
            <Modal className="majorPopUpContainer" isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
                    <div>
                        <div className="majorPopUpTop">
                            <div>{major_name}</div>
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
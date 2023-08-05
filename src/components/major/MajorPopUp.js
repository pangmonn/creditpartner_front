import React, {useState} from "react";
import Modal from 'react-modal';

const MajorPopUp = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    
    return (
        <div>
            <button onClick={()=> setModalIsOpen(true)}>학과 정보</button>
            <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
                <div>
                - 학과 설명
                </div>
                <br />

                <div>
                - 이런 학생에게 추천해요  
                </div>
                <br />

                <div>
                - 유사 학과
                </div>
                <br />

                <div>
                - 추천하는 선택 과목
                    <div>
                        ... 일반 선택
                    </div>
                    <br />

                    <div>
                        ... 진로 선택
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default MajorPopUp;
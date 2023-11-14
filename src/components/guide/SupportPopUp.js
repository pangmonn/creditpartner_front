import React, { useState } from 'react';
import Modal from 'react-modal';
import './styles/supportpopup.css';
import magnifier from '../../images/magnifier.png';

// Import your support images
import support_1 from '../../images/support/support (1).jpg';
import support_2 from '../../images/support/support (2).jpg';
import support_3 from '../../images/support/support (3).jpg';
import support_4 from '../../images/support/support (4).jpg';
import support_5 from '../../images/support/support (5).jpg';

const imgstyle = {
    width: '30px',
    height: '30px',
    marginLeft: 'auto'
};

const support_imgstyle = {
    width: '500px',
    height: '500px'
};

const supportImages = [support_1, support_2, support_3, support_4, support_5];

const pageContents = [
  "학과별 이수 가이드의 첫 페이지입니다. 함께 사용법을 알아볼까요?",
  "▶ 맨 위에 있는 학과 버튼을 누르면, 각 학과에 해당하는 추천 과목과 이수한 과목을 확인할 수 있어요. <br /><br /> ▶ 학기 버튼을 누르면 해당 학기에 수강한 과목의 색이 달라진답니다.",
  "▶ 과목 리스트에서는 이수 계획을 확인할 수 있어요. 처음에는 추천 과목과 이수한 과목만 나옵니다. <br /><br /> ▶ 가장 오른쪽의 이수학점/최소학점을 보고 얼마나 이수하면 되는지도 확인할 수 있어요.",
  "▶ 과목을 추가하고 삭제할 수 있는 기능이에요. <br /><br /> ▶ + 또는 - 버튼을 누르면 팝업창이 나와서 추가 삭제할 수 있는 과목 목록이 나와요. <br /><br /> ▶ 특별히 추천 과목은 다른 색으로 나온답니다.",
  "▶ 얼마나 이수했고 얼마나 더 이수하면 되는지 확인할 수 있는 합계 기능이 있어요. <br /><br /> ▶ 위의 모든 과목을 수강했을 때, 얼마나 학점을 받을 수 있는지 확인할 수 있는 예상 이수학점 기능이 있어요. <br /><br /> ▶ 카메라 버튼을 누르면 지금까지의 이수 가이드를 사진으로 저장할 수 있습니다."
];

const SupportPopUp = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);

    const modalClose = () => {
        setModalIsOpen(false);
    };

    const goToNextPage = () => {
        setCurrentPage((prevPage) => Math.min(supportImages.length, prevPage + 1));
    };

    const goToPreviousPage = () => {
        setCurrentPage((prevPage) => Math.max(1, prevPage - 1));
    };

    return (
        <div>
            <button className="supportPopUpButton" onClick={() => setModalIsOpen(true)}>
                <img src={magnifier} style={imgstyle} alt="Magnifier" />
            </button>
            <Modal className="supportPopUpContainer" isOpen={modalIsOpen} onRequestClose={modalClose}>
                <div>
                    <div className="supportPopUpTop">
                        <div>도움말</div>
                        <button className="supportPopUpClose" onClick={modalClose}>닫기</button>
                    </div>
                    <div>
                        <img src={supportImages[currentPage - 1]} alt={`Support ${currentPage}`} style={support_imgstyle} className='supportPopUpImage'/>
                    </div>
                    <div className='supportPopUpContent' dangerouslySetInnerHTML={{ __html: pageContents[currentPage - 1] }} />
                    <div className="supportPopUpPageButtonsContainer">
                        <button className="supportPopUpPageButton" onClick={goToPreviousPage} disabled={currentPage === 1}>이전 페이지</button>
                        <span>- {currentPage} -</span>
                        <button className="supportPopUpPageButton" onClick={goToNextPage} disabled={currentPage === supportImages.length}>다음 페이지</button>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default SupportPopUp;

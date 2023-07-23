import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import './styles/subjectitem.css'

const subjectList = ["국어","수학","영어","한국사","사회","과학","체육","예술","기술가정","제2외국어","한문","교양"];
const classList0 = ["국어","화법과 작문", "독서", "언어와 매체", "문학", "실용국어","심화국어","고전읽기"];
const classList1 = ["수학","수학Ⅰ","수학Ⅱ","미적분","확률과 통계","기본 수학","실용 수학","기하","경제 수학","수학과제 탐구","인공지능 수학"];


const subjectOptions = [
    {value: "국어", label: "국어"},
    {value: "수학", label: "수학"},
    {value: "영어", label: "영어"},
    {value: "한국사", label: "한국사"},
    {value: "사회", label: "사회"},
    {value: "과학", label: "과학"},
    {value: "체육", label: "체육"},
    {value: "예술", label: "예술"},
    {value: "기술가정", label: "기술가정"},
    {value: "제2외국어", label: "제2외국어"},
    {value: "한문", label: "한문"},
    {value: "교양", label: "교양"},
];

const classOptions = [ [{value: "국어", label: "국어"},{value: "화법과 작문", label: "화법과 작문"},
{value: "독서", label: "독서"},
{value: "언어와 매체", label: "언어와 매체"},
{value: "문학", label: "문학"},
{value: "실용 국어", label: "실용 국어"},
{value: "심화 국어", label: "심화 국어"},
{value: "고전 읽기", label: "고전 읽기"},],
//수학
[{value: "수학", label: "수학"},
{value: "수학Ⅰ", label: "수학Ⅰ"},
{value: "수학Ⅱ", label: "수학Ⅱ"},
{value: "미적분", label: "미적분"},
{value: "확률과 통계", label: "확률과 통계"},
{value: "기본 수학", label: "기본 수학"},
{value: "실용 수학", label: "실용 수학"},
{value: "기하", label: "기하"},
{value: "경제 수학", label: "경제 수학"},
{value: "수학과제 탐구", label: "수학과제 탐구"},
{value: "인공지능 수학", label: "인공지능 수학"},],
//영어
[{value: "영어", label: "영어"},
{value: "영어Ⅰ", label: "영어Ⅰ"},
{value: "영어Ⅱ", label: "영어Ⅱ"},
{value: "영어 회화", label: "영어 회화"},
{value: "영어 독해와 작문", label: "영어 독해와 작문"},
{value: "기본 영어", label: "기본 영어"},
{value: "실용 영어", label: "실용 영어"},
{value: "영어권 문화", label: "영어권 문화"},
{value: "진로 영어", label: "진로 영어"},
{value: "영미 문학 읽기", label: "영미 문학 읽기"},],
//한국사
[{value: "한국사", label: "한국사"},],
//사회
[{value: "통합사회", label: "통합사회"},
{value: "한국지리", label: "한국지리"},
{value: "세계지리", label: "세계지리"},
{value: "세계사", label: "세계사"},
{value: "동아시아사", label: "동아시아사"},
{value: "경제", label: "경제"},
{value: "정치와 법", label: "정치와 법"},
{value: "사회문화", label: "사회문화"},
{value: "생활과 윤리", label: "생활과 윤리"},
{value: "윤리와 사상", label: "윤리와 사상"},
{value: "여행지리", label: "여행지리"},
{value: "사회문제 탐구", label: "사회문제 탐구"},
{value: "고전과 윤리", label: "고전과 윤리"},],
//과학
[{value: "통합과학", label: "통합과학"},
{value: "과학탐구실험", label: "과학탐구실험"},
{value: "물리학Ⅰ", label: "물리학Ⅰ"},
{value: "화학Ⅰ", label: "화학Ⅰ"},
{value: "생명과학Ⅰ", label: "생명과학Ⅰ"},
{value: "지구과학Ⅰ", label: "지구과학Ⅰ"},
{value: "물리학Ⅱ", label: "물리학Ⅱ"},
{value: "화학Ⅱ", label: "화학Ⅱ"},
{value: "생명과학Ⅱ", label: "생명과학Ⅱ"},
{value: "지구과학Ⅱ", label: "지구과학Ⅱ"},
{value: "과학사", label: "과학사"},
{value: "생활과 과학", label: "생활과 과학"},
{value: "융합과학", label: "융합과학"},],
//체육
[{value: "체육", label: "체육"},
{value: "운동과 건강", label: "운동과 건강"},
{value: "스포츠 생활", label: "스포츠 생활"},
{value: "체육 탐구", label: "체육 탐구"},],
//예술
[{value: "음악", label: "음악"},
{value: "예술", label: "예술"},
{value: "연극", label: "연극"},
{value: "음악 연주", label: "음악 연주"},
{value: "음악 감상과 비평", label: "음악 감상과 비평"},
{value: "미술 창작", label: "미술 창작"},
{value: "미술 감상과 비평", label: "미술 감상과 비평"},],
//기술가정
[
{value: "기술가정", label: "기술가정"},
{value: "정보", label: "정보"},
{value: "농업 생명 과학", label: "농업 생명 과학"},
{value: "공학 일반", label: "공학 일반"},
{value: "창의 경영", label: "창의 경영"},
{value: "해양 문화와 기술", label: "해양 문화와 기술"},
{value: "가정 과학", label: "가정 과학"},
{value: "지식 재산 일반", label: "지식 재산 일반"},
{value: "인공지능 기초", label: "인공지능 기초"},
],
//제2외국어
[
{value: "독일어Ⅰ", label: "독일어Ⅰ"},
{value: "일본어Ⅰ", label: "일본어Ⅰ"},
{value: "프랑스어Ⅰ", label: "프랑스어Ⅰ"},
{value: "러시아어Ⅰ", label: "러시아어Ⅰ"},
{value: "스페인어Ⅰ", label: "스페인어Ⅰ"},
{value: "아랍어Ⅰ", label: "아랍어Ⅰ"},
{value: "중국어Ⅰ", label: "중국어Ⅰ"},
{value: "베트남어Ⅰ", label: "베트남어Ⅰ"},
{value: "독일어Ⅱ", label: "독일어Ⅱ"},
{value: "일본어Ⅱ", label: "일본어Ⅱ"},
{value: "프랑스어Ⅱ", label: "프랑스어Ⅱ"},
{value: "러시아어Ⅱ", label: "러시아어Ⅱ"},
{value: "스페인어Ⅱ", label: "스페인어Ⅱ"},
{value: "아랍어Ⅱ", label: "아랍어Ⅱ"},
{value: "중국어Ⅱ", label: "중국어Ⅱ"},
{value: "베트남어Ⅱ", label: "베트남어Ⅱ"}
],
//한문
[
{value: "한문Ⅰ", label: "한문Ⅰ"},
{value: "한문Ⅱ", label: "한문Ⅱ"}
],
//교양
[
{value: "철학", label: "철학"},
{value: "논리학", label: "논리학"},
{value: "심리학", label: "심리학"},
{value: "교육학", label: "교육학"},
{value: "종교학", label: "종교학"},
{value: "진로와 직업", label: "진로와 직업"},
{value: "보건", label: "보건"},
{value: "환경", label: "환경"},
{value: "실용 경제", label: "실용 경제"},
{value: "논술", label: "논술"}
]];

const creditOptions = [{value: "1", label: "1"},
{value: "2", label: "2"},
{value: "3", label: "3"},
{value: "4", label: "4"},
{value: "5", label: "5"},
{value: "6", label: "6"}];

const SubjectItem = ({ subject, id, onModifySubject, onModifyClass, onModifyCredit }) => {
    let subjectNum = -1;
    let classNum = -1;
    if(subject.subject) {
        subjectNum = subjectList.indexOf(subject.subject); //class drop down을 위한 영역 index 구하기
        //for showing
        switch(subjectNum) {
            case 0: //국어
                classNum = classList0.indexOf(subject.class);
                break;
            case 1:
                classNum = classList1.indexOf(subject.class);
                break;
            default:
                break;
        }
    }

    const [subjectSelected, setSubjectSelected] = useState(subject.subject);

    const onSelectSubject = (e) => {
        onModifySubject(e, id);
        setSubjectSelected(e.value)
    }
    const onSelectClass = (e) => {
        onModifyClass(e, id);
    }
    const onSelectCredit = (e) => {
        onModifyCredit(e, id);
    }

    useEffect(() => {
        setSubjectSelected(subject.subject);
    },[]);

    return (
        <div className='subjectItemList'>
            <Select options={subjectOptions}
                    isSearchable={false}
                    onChange={onSelectSubject}
                    value={subjectOptions.filter(function (option) {
                        return option.value === subject.subject;
                    })} /> 
            <Select options={classOptions[subjectList.indexOf(subjectSelected)]}
                    isSearchable={false}
                    onChange={onSelectClass}
                    value={classOptions[subjectNum].filter(function (option) {
                        return option.value === subject.class;
                    })} />
            <Select options={creditOptions}
                    isSearchable={false}
                    onChange={onSelectCredit}
                    value={creditOptions.filter(function (option) {
                        return option.value === subject.credit;
                    })} />
        </div>
        
    );
};

export default SubjectItem;
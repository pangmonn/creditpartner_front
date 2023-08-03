import React, { useState } from 'react';
import FieldBar from './FieldBar';
import LineBar from './LineBar';
import MajorBar from './MajorBar';
import MajorList from './MajorList';
import './styles/showresult.css'

const fieldOptions = [
    {value: '인문', label: '인문'},
    {value: '사회', label: '사회'},
    {value: '자연과학', label: '자연과학'},
    {value: '공학', label: '공학'},
    {value: '보건·의약학', label: '보건·의약학'},
    {value: '교육', label: '교육'},
];

const lineOptions = [
    // 인문
    [
        { value: '언어∙문학', label: '언어∙문학' },
        { value: '인문과학', label: '인문과학' },
    ],

    // 사회
    [
        { value: '상경', label: '상경' },
        { value: '광고언론정보', label: '광고언론정보' },
        { value: '사회과학', label: '사회과학' },
        { value: '법행정', label: '법행정' },
    ],

    // 자연과학
    [
        { value: '자연과학', label: '자연과학' },
        { value: '생활과학', label: '생활과학' },
        { value: '농림', label: '농림' },
    ],

    // 공학
    [
        { value: '기계전자', label: '기계전자' },
        { value: '정보컴퓨터', label: '정보컴퓨터' },
        { value: '건축∙환경', label: '건축∙환경' },
        { value: '화학생명', label: '화학생명' },
    ],

    // 보건·의약학
    [
        { value: '보건', label: '보건' },
        { value: '의약학', label: '의약학' },
    ],

    // 교육
    [{ value: '교육', label: '교육' }],
];

const majorOptions = [
    // 인문
    [
        // 언어∙문학
        [
            { value: '국어국문학과', label: '국어국문학과' },
            { value: '일어일문학과', label: '일어일문학과' },
            { value: '중어중문학과', label: '중어중문학과' },
            { value: '노어노문학과', label: '노어노문학과' },
            { value: '독어독문학과', label: '독어독문학과' },
            { value: '불어불문학과', label: '불어불문학과' },
            { value: '서어서문학과', label: '서어서문학과' },
            { value: '영어영문학과', label: '영어영문학과' },
            { value: '통번역학과', label: '통번역학과' },
        ],
        
        // 인문과학
        [
            { value: '고고학과', label: '고고학과' },
            { value: '문헌정보학과', label: '문헌정보학과' },
            { value: '문화재보존학과', label: '문화재보존학과' },
            { value: '문화콘텐츠학과', label: '문화콘텐츠학과' },
            { value: '사학과', label: '사학과' },
            { value: '인류학과', label: '인류학과' },
            { value: '철학과', label: '철학과' },
        ],
    ],

    // 사회
    [
        // 상경
        [
            { value: '경영학과', label: '경영학과' },
            { value: '경제학과', label: '경제학과' },
            { value: '금융보험학과', label: '금융보험학과' },
            { value: '무역·유통학과', label: '무역·유통학과' },
            { value: '세무·회계학과', label: '세무·회계학과' },
            { value: '호텔·관광경영학과', label: '호텔·관광경영학과' },
        ],

        // 광고언론정보
        [
            { value: '광고홍보학과', label: '광고홍보학과' },
            { value: '언론정보학과', label: '언론정보학과' },
            { value: '정보미디어학과', label: '정보미디어학과' },
        ],
        
        // 사회과학
        [
            { value: '국제학과', label: '국제학과' },
            { value: '사회학과', label: '사회학과' },
            { value: '사회복지학과', label: '사회복지학과' },
            { value: '심리학과', label: '심리학과' },
            { value: '아동학과', label: '아동학과' },
            { value: '정치외교학과', label: '정치외교학과' },
            { value: '지리학과', label: '지리학과' },
            { value: '항공서비스학과', label: '항공서비스학과' },
        ],

        // 법행정
        [
            { value: '법학과', label: '법학과' },
            { value: '보건행정학과', label: '보건행정학과' },
            { value: '행정학과', label: '행정학과' },
        ],
    ],

    // 자연과학
    [
        // 자연과학
        [
            { value: '대기과학과', label: '대기과학과' },
            { value: '물리학과', label: '물리학과' },
            { value: '생명과학과', label: '생명과학과' },
            { value: '수학과', label: '수학과' },
            { value: '지질학과', label: '지질학과' },
            { value: '천문학과', label: '천문학과' },
            { value: '통계학과', label: '통계학과' },
            { value: '화학과', label: '화학과' },
        ],

        // 생활과학
        [
            { value: '식품영양학과', label: '식품영양학과' },
            { value: '의류학과', label: '의류학과' },
        ],

        // 농림
        [
            { value: '농생물학과', label: '농생물학과' },
            { value: '동물자원학과', label: '동물자원학과' },
            { value: '원예학과', label: '원예학과' },
            { value: '조경학과', label: '조경학과' },
        ],
    ],

    // 공학
    [
        // 기계전자
        [
            { value: '기계공학과', label: '기계공학과' },
            { value: '미래자동차학과', label: '미래자동차학과' },
            { value: '자동차학과', label: '자동차학과' },
            { value: '전기공학과', label: '전기공학과' },
            { value: '전자공학과', label: '전자공학과' },
            { value: '제어계측공학과', label: '제어계측공학과' },
            { value: '항공우주공학과', label: '항공우주공학과' },
            { value: '항공운항학과', label: '항공운항학과' },
        ],

        // 정보컴퓨터
        [
            { value: '빅데이터공학과', label: '빅데이터공학과' },
            { value: '멀티미디어학과', label: '멀티미디어학과' },
            { value: '산업공학과', label: '산업공학과' },
            { value: '소프트웨어학과', label: '소프트웨어학과' },
            { value: '융합학과', label: '융합학과' },
            { value: '인공지능학과', label: '인공지능학과' },
            { value: '정보보안학과', label: '정보보안학과' },
            { value: '정보통신공학과', label: '정보통신공학과' },
            { value: '컴퓨터공학과', label: '컴퓨터공학과' },
        ],

        // 건축∙환경
        [
            { value: '건축공학과', label: '건축공학과' },
            { value: '교통공학과', label: '교통공학과' },
            { value: '도시공학과', label: '도시공학과' },
            { value: '토목공학과', label: '토목공학과' },
            { value: '해양공학과', label: '해양공학과' },
            { value: '환경공학과', label: '환경공학과' },
        ],

        // 화학생명
        [
            { value: '생명공학과', label: '생명공학과' },
            { value: '섬유공학과', label: '섬유공학과' },
            { value: '식품공학과', label: '식품공학과' },
            { value: '신소재공학과', label: '신소재공학과' },
            { value: '에너지자원공학과', label: '에너지자원공학과' },
            { value: '재료공학과', label: '재료공학과' },
            { value: '화장품과학과', label: '화장품과학과' },
            { value: '화학공학과', label: '화학공학과' },
        ],
    ],

    // 보건·의약학
    [
        // 보건
        [
            { value: '간호학과', label: '간호학과' },
            { value: '물리치료학과', label: '물리치료학과' },
            { value: '응급구조학과', label: '응급구조학과' },
            { value: '임상병리학과', label: '임상병리학과' },
            { value: '재활치료학과', label: '재활치료학과' },
            { value: '치기공학과', label: '치기공학과' },
            { value: '치위생학과', label: '치위생학과' },
        ],

        // 의약학
        [
            { value: '수의학과', label: '수의학과' },
            { value: '약학과', label: '약학과' },
            { value: '의예과', label: '의예과' },
            { value: '치의예과', label: '치의예과' },
            { value: '한의예과', label: '한의예과' },
        ],
    ],

    // 교육
    [
        // 교육
        [
            { value: '국어교육과', label: '국어교육과' },
            { value: '영어교육과', label: '영어교육과' },
            { value: '독어교육과', label: '독어교육과' },
            { value: '불어교육과', label: '불어교육과' },
            { value: '일어교육과', label: '일어교육과' },
            { value: '중국어교육과', label: '중국어교육과' },
            { value: '한문교육과', label: '한문교육과' },
            { value: '사회교육과', label: '사회교육과' },
            { value: '역사교육과', label: '역사교육과' },
            { value: '지리교육과', label: '지리교육과' },
            { value: '윤리교육과', label: '윤리교육과' },
            { value: '수학교육과', label: '수학교육과' },
            { value: '물리교육과', label: '물리교육과' },
            { value: '화학교육과', label: '화학교육과' },
            { value: '생물교육과', label: '생물교육과' },
            { value: '지구과학교육과', label: '지구과학교육과' },
            { value: '교육학과', label: '교육학과' },
            { value: '초등교육과', label: '초등교육과' },
            { value: '유아교육과', label: '유아교육과' },
        ],
    ], 
];

const ShowResult = () => {
    const [fieldSelected, setFieldSelected] = useState(null);
    const [lineSelected, setLineSelected] = useState(null);
    const [majorSelected, setMajorSelected] = useState(null);

    const onSelectField = (e) => {
        setFieldSelected(e);
        setLineSelected(null);
        setMajorSelected(null);
    };
  
    const onSelectLine = (e) => {
        setLineSelected(e);
        setMajorSelected(null);
    };
  
    const onSelectMajor = (e) => {
        setMajorSelected(e);
    };

    console.log(fieldSelected);
    console.log(lineSelected);
    console.log(majorSelected);

    return (
        <div>
            <div className='showResultContainer'>
                <FieldBar fieldOptions={fieldOptions} fieldSelected={fieldSelected} onSelectField={onSelectField} />
                <LineBar lineOptions={lineOptions} lineSelected={lineSelected} onSelectLine={onSelectLine} fieldSelected={fieldSelected} />
                <MajorBar majorOptions={majorOptions} majorSelected={majorSelected} onSelectMajor={onSelectMajor} fieldSelected={fieldSelected} lineSelected={lineSelected} />
            </div>
            <div>
                <MajorList fieldSelected={fieldSelected} lineSelected={lineSelected} majorSelected={majorSelected} />
            </div>
        </div>
    );
  };
  
  export default ShowResult;
import React, { useCallback, useEffect, useState } from 'react';
import BotBubble from '../BotBubble';
import client from '../../auth/api/client';
import save from '../../../images/save.png';
import { useNavigate } from 'react-router-dom';
import '../styles/Result.css';
const API_KEY = '';

const config = { headers : { "Content-Type": 'application/json', Authorization: localStorage.getItem("login-token") } };


const Result = ({answers, setResultMajor}) => {
    const navigate = useNavigate();

    let gptQuestion = '';
    let studentInfo = '';
    let dep = ''; //회망 분야
    const likeSubject = answers[1];
    const hateSubject = answers[2];
    let strongField = '';
    const goodAs = answers[4];
    let personality = '';
    const dep_liberal = "국어국문학과, 일어일문학과, 중어중문학과, 노어노문학과, 독어독문학과, 불어불문학과, 서어서문학과, 영어영문학과, 통번역학과, 서양어학, 고고학과, 문헌정보학과, 문화재보존학과, 문화콘텐츠학과, 사학과, 인류학과, 철학과. "
    const dep_social = "경영학과, 경제학과, 금융보험학과, 무역·유통학과, 세무·회계학과, 호텔·관광경영학과, 광고홍보학과, 언론정보학과, 정보미디어학과, 국제학과, 사회학과, 사회복지학과, 아동학과, 심리학과, 정치외교학과, 지리학, 항공서비스학과, 법학과, 보건행정학과, 행정학과. "
    const dep_naturalScience = "대기과학과, 물리학과, 생명과학과, 수학과, 지질학과, 천문학과, 통계학과, 화학과, 식품영양학과, 의류학과, 농생물학과, 동물자원학과, 원예학과, 조경학과. "
    const dep_engineering = "기계공학과, 미래자동차학과, 자동차학과, 전기공학과, 전자공학과, 제어계측공학과, 항공우주공학, 항공운항학과, 빅데이터공학과, 멀티미디어학과, 산업공학과, 소프트웨어학과, 융합학과, 인공지능학과, 정보보안학과, 정보통신공학과, 컴퓨터공학과, 건축공학과, 교통공학과, 도시공학과, 토목공학과, 해양공학과, 환경공학과, 생명공학과, 섬유공학과, 식품공학과, 신소재공학과, 에너지자원공학과, 재료공학과, 화장품과학과, 화학공학과. "
    const dep_medical = "간호학과, 물리치료학과, 응급구조학과, 임상병리학과, 재활치료학과, 치기공학과, 치위생학과, 수의학과, 약학과, 의예과, 치의예과, 한의예과. "
    const dep_education = "국어교육과, 영어교육과, 독어교육과, 불어교육과, 일어교육과, 중국어교육과, 한문교육과, 사회교육과, 역사교육과, 지리교육과, 윤리교육과, 수학교육과, 물리교육과, 화학교육과, 생물교육과, 지구과학교육과, 교육학과, 초등교육과, 유아교육과. "
    
    // 희망 분야 있니
    switch(Number(answers[0])) {
        case 0: //없음
            dep = dep_liberal + dep_social + dep_naturalScience + dep_engineering + dep_medical + dep_education;
            break;
        case 1:
            dep = dep_liberal;
            break;
        case 2:
            dep = dep_social;
            break;
        case 3:
            dep = dep_naturalScience;
            break;
        case 4:
            dep = dep_engineering;
            break;
        case 5:
            dep = dep_medical;
            break;
        case 6:
            dep = dep_education;
            break;
        default:
    }

    //강점 분야
    const strongs = answers[3];
    for(let i=0;i<strongs.length;i++) {
        switch(Number(strongs[i])) {
            case 1:
                strongField += "단어, 어휘의 의미와 소리에 대해 민감하며, 언어의 구조 및 언어가 사용될 수 있는 다양한 방법을 잘 알고 사용할 수 있음. ";
                break;
            case 2:
                strongField += "수와 같은 추상적인 상징체계를 조작하고 그들의 관계를 인식하며 논리적이고 체계적으로 아이디어 평가를 잘함. ";
                break;
            case 3:
                strongField += "자연물, 동식물에 관심을 가지고 잘돌보거나 자연현상을 잘 이해하고, 자연을 보존하는데 관심이 있음. ";
                break;
            case 4:
                strongField += "색, 모양, 대칭, 이미지 등 시각자극을 정확하게 지각하고, 그러한 지각을 변형하며 관련 자극이 없을 때도 시각화를 잘함. ";
                break;
            case 5:
                strongField += "음의 높낮이,박자, 속도, 선율에 대해 민감하고, 음악을 만들고 분석하는 능력이 있으며 음악의 정서적인 측면을 잘 이해할 수 있음. ";
                break;
            case 6:
                strongField += "자신을 표현하고 목적 달성을 하기 위해 몸을 기술적으로 사용하는 능력이 있고, 사물을 기술적으로 다루는 데 민감함. ";
                break;
            case 7:
                strongField += "타인의 기분이나 기질, 동기, 의도 등을 잘 알아차리고 이에 대해 적절하고 민감하게 반응함. ";
                break;
            case 8:
                strongField += "자신의 내부상태에 대해 민감하며, 자신의 강약점, 욕구를 파악하고, 자신에 대한 정보를 적절하게 사용하여 적응적으로 행동하는 데 민감함. ";
                break;
            default:
        }
    }

    //성격
    switch(Number(answers[5])) {
        case 1:
            personality += "원칙주의자, 자기주장적인, 문제해결지향성, 집중력, 신중한, 도전적, 진취성, 경쟁욕구, 직선적, 주도적인 특징이 있는 리더형. ";
            break;
        case 2:
            personality += "자기표현, 친교관계, 솔직함, 인간적인 특징이 있는 사교형. ";
            break;
        case 3:
            personality += "장기 집중력, 감정 통제력, 합리화, 신중성, 비사교성, 성취지향적 특징이 있는 분석형. ";

            break;
        case 4:
            personality += "따뜻한, 친화적인, 순종적인, 겸손한, 조용한, 갈등회피, 친절함, 충동통제, 침착, 느림, 공감적이해, 상호협력적 특징이 있는 조화형. ";
            break;
        default:
    }

    //질문 총집합
    studentInfo += "좋아하는 과목 : " + likeSubject + " ";
    studentInfo += "싫어하는 과목 :" + hateSubject + " ";
    studentInfo += "강점 영역 : " + strongField + " ";
    studentInfo += "스스로 잘한다고 생각하는 것 : " + goodAs + " ";
    studentInfo += "성격 : " + personality + " ";

    gptQuestion = "고등학생 친구가 진학할 학과를 추천해주려고 해. 다른 정보보다 학생이 좋아하는 과목과 싫어하는 과목에 비중을 더 높게 두고 학과를 추천해줘. " + studentInfo + "다음의 학과 중에서 가장 잘 어울리는 학과 3가지를 적어줘. " + dep + "답변의 예시를 적어줄게. 반드시 다음 형식에 맞춰서 적어줘. 1.컴퓨터공학과 :  2.사회학과 :  3.국어교육과 :"
    let quest = `아래 문맥에 따라 질문에 답하세요.
 
    맥락: 고등학생 친구가 진학할 학과를 추천해주려고 합니다. 학생의 정보는 다음과 같습니다. ${studentInfo} \n
        가장 잘 어울리는 학과 3가지를 반드시 다음 학과 중에서만 선택하여 골라주세요. \n ${dep} \n
        답변의 예시입니다. 이와 동일한 형태로 답변을 작성해주세요 \n
        1.과 이름
        2.과 이름
        3.과 이름

    질문: 고등학생 친구에게 진학할 학과를 추천해주세요. 싫어하는 과목과 관련된 학과는 추천에서 제외하고 좋아하는 과목과 관련된 학과들을 중점으로 추천해주세요. 반드시 다음 학과 중에서만 골라해주세요. \n ${dep}
    
    답변:
    `
    let data;
    const [GPTanswer, setGPTanswer] = useState('');
    //const [major3, setMajor3] = useState([]);
    const [resultMent, setResultMent] = useState([]);
    const [postMajor, setPostMajor] = useState(['','','']);
    

    useEffect(() => {
            const getResult = async () => {
                const options = {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${API_KEY}`
                    },
                    body: JSON.stringify({
                        model: "gpt-3.5-turbo",
                        messages: [{role: "user", content: quest}],
                        max_tokens: 1000,
                        temperature: 0
                    })
                }
                try {
                    const response = await fetch('https://api.openai.com/v1/chat/completions', options)
                    data = await response.json();
                    setGPTanswer(data.choices[0].message["content"]);

                    /*
                    def abstract(str):
                        depart = str.split('\n')
                        recommand = []

                        for s in depart:
                          if s != '':
                            find_colon = s.find(':')
                            recommand.append(s[3:find_colon])

                        return recommand
                    */

                } catch (error) {
                    console.log(error);
                }
        
            }
            getResult();
            //GPTanswer = data.choices[0].message["content"];
            console.log(GPTanswer);
            
            
        }
    ,[]);

    useEffect(() => {
        if(GPTanswer!=='') {
            let tempAnswer=GPTanswer;
            console.log(GPTanswer);
            let majors = [];
            let first = tempAnswer.indexOf('1');
            let first_colon = tempAnswer.indexOf('\n', first);
            majors.push(tempAnswer.slice(first+3,first_colon));
    
            let second = tempAnswer.indexOf('2');
            let second_colon = tempAnswer.indexOf('\n', second);
            majors.push(tempAnswer.slice(second+3,second_colon));
    
            let third = tempAnswer.indexOf('3');
            let third_colon = tempAnswer.indexOf('과', third);
            majors.push(tempAnswer.slice(third+3,third_colon+1));
            console.log(majors);
    
            if(majors!==[]) {
                let testResultMent=[];
                for(let i=0;i<majors.length;i++) {
                    let temp = (i+1) + '. ' + majors[i];
                    testResultMent.push(temp);
                }
                setResultMent(testResultMent);
                setPostMajor(majors);
            }
        }
    }, [GPTanswer]);

    const onClickSave = () => {
        const data = [{ 'resultMajor': postMajor[0] },{ 'resultMajor': postMajor[1] },{ 'resultMajor': postMajor[2] }]
        console.log(data);
        client.post('/api/chatbot2', data, config).then(function (response) {
            console.log(response);
        }).catch(function (error) {
            console.log(error);
        });
       alert('저장되었습니다.');
       navigate('/');
    }


    return (
        <div>
            {GPTanswer==='' ? <BotBubble text={'결과 분석 중...'} /> : (
                <>
                    <BotBubble text={[resultMent[0],<br/>,resultMent[1],<br/>,resultMent[2]]} />
                    <div className='last'><BotBubble text="추천하는 선택과목들을 '학과별 이수 가이드' 에서 확인하고 싶다면 아래 버튼을 눌러줘." />
                    <img src={save} onClick={onClickSave} className='save' />
                    </div>
                </>
                
                )}
        </div>
    );
};

export default Result;
import React, { useState, useRef, useCallback, useEffect } from 'react';
import CategoryButton from './CategoryButton';
import MainCategory from './MainCategory';
import ModifyBar from './ModifyBar';
import Top from './Top';
import { useNavigate } from 'react-router-dom';
import {getClasses, postClasses} from './api/creditsAPI';

const desktop = {
    width: "800px",
    marginLeft: "auto",
    marginRight: "auto",
};

const CreditsTemplate = () => {
    const navigate = useNavigate();
    const [subjects, setSubjects] = useState([
        {
            id: 1,
            subject: '국어',
            class_name: '',
            credit: '',
        },
        {
            id: 2,
            subject: '수학',
            class_name: '',
            credit: '',
        },
        {
            id: 3,
            subject: '영어',
            class_name: '',
            credit: '',
        },
    ]);

    const [semester, setSemester] = useState('1'); //semester -> 1: 1-1 / 2: 1-2 / ...
    

    //GET => semester와 해당하는 item들 list 받기

    const nextId = useRef(4);

    const onModifySubject = useCallback((e, id) => {
        setSubjects(
            subjects.map(subject => (subject.id === id) ? { ...subject, subject: e.value } : subject)
        );
        //console.log(e);
    });

    const onModifyClass = useCallback((e, id) => {
        setSubjects(
            subjects.map(subject => (subject.id === id) ? { ...subject, class_name: e.value } : subject)
        );
        //console.log(id);
    });

    const onModifyCredit = useCallback((e, id) => {
        setSubjects(
            subjects.map(subject => (subject.id === id) ? { ...subject, credit: e.value } : subject)
        );
        //console.log(e);
    });

    const onAddClass = useCallback(() => {
        const newClass = {
            id: nextId.current,
            subject:'국어',
            class_name: '',
            credit: '',
        };
        setSubjects(subjects.concat(newClass));
        nextId.current += 1;
        //console.log(subjects);
    }, [subjects]);

    const onClearClass = useCallback(() => {
        setSubjects([
            {
                id: 1,
                subject: '국어',
                class_name: '',
                credit: '',
            },
            {
                id: 2,
                subject: '수학',
                class_name: '',
                credit: '',
            },
            {
                id: 3,
                subject: '영어',
                class_name: '',
                credit: '',
            },
        ]);
        nextId.current = 4;
    }, [semester]);
    

    const onClickSemester = useCallback((e) => {
        
        setSemester(e.value);
        let classes = [];
        const get = async () => {
            try {
                const data = await getClasses(semester);
                // data에 접근하여 필요한 작업 수행
                classes = data;

                let newSubject = [];
                for(let i=0;i<classes.length;i++) {
                    const newClass = {
                        id: i,
                        subject: classes[i].subject,
                        class_name:  classes[i].class_name,
                        credit:  classes[i].credit,
                    };
                    newSubject.push(newClass);
                    console.log(newClass);
                    console.log(newSubject);
                }
                nextId.current = classes.length;
                console.log(newSubject.length);
                if(newSubject.length===0) {
                    setSubjects([
                        {
                            id: 1,
                            subject: '국어',
                            class_name: '',
                            credit: '',
                        },
                        {
                            id: 2,
                            subject: '수학',
                            class_name: '',
                            credit: '',
                        },
                        {
                            id: 3,
                            subject: '영어',
                            class_name: '',
                            credit: '',
                        },
                    ]);
                }
                else {
                    setSubjects(newSubject);
                }
            } catch (error) {
                // 에러 처리
            }
        };
        get(); //semester 학기에 저장된 class들 리스트 받아오기
        
        //console.log(newSubject);
        
    }, [semester]);

    useEffect(() => {
        console.log("11");
        let classes = [];
        const get = async () => {
            try {
                const data = await getClasses(semester);
                classes = data;
                console.log(classes)
    
                let newSubject = [];
                for(let i=0; i<classes.length; i++) {
                    const newClass = {
                        id: i,
                        subject: classes[i].subject,
                        class_name:  classes[i].class_name,
                        credit:  classes[i].credit,
                    };
                    newSubject.push(newClass);
                }
                nextId.current = classes.length;
                console.log(newSubject.length);
                if(newSubject.length === 0) {
                    newSubject = [
                        {
                            id: 1,
                            subject: '국어',
                            class_name: '',
                            credit: '',
                        },
                        {
                            id: 2,
                            subject: '수학',
                            class_name: '',
                            credit: '',
                        },
                        {
                            id: 3,
                            subject: '영어',
                            class_name: '',
                            credit: '',
                        },
                    ];
                }
                setSubjects(newSubject);
            } catch (error) {
                // 에러 처리
            }
        };
        get(); //semester 학기에 저장된 class들 리스트 받아오기
    }, [semester]);
    
    // subjects 값을 변경한 후 다음 렌더링에서 화면에 출력
    console.log(subjects);
    

    const onSubmitClass = useCallback(() => {
        for(let i=0;i<subjects.length;i++) {
            if(subjects[i].subject==='' || subjects[i].class_name==='' || subjects[i].credit==='') {
                alert('빈 칸을 모두 선택하세요.');
                return;
            }
        }
        //post
        postClasses(subjects, semester);
        alert('저장되었습니다.')
    })

    console.log(subjects);

    return (
        <div style={desktop}>
            <Top />
            <CategoryButton semester={semester} onClickSemester={onClickSemester} />
            <MainCategory subjects={subjects} onModifySubject={onModifySubject} onModifyClass={onModifyClass} onModifyCredit={onModifyCredit} />
            <ModifyBar onAddClass={onAddClass} onClearClass={onClearClass} onSubmitClass={onSubmitClass} />
        </div>
    );
};

export default CreditsTemplate;
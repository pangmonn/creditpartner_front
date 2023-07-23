import { useEffect, useState } from 'react';
import AuthForm from './AuthForm';
import { useNavigate } from 'react-router-dom';
import { join } from './api/auth';


const JoinForm = () => {
    const [error, setError] = useState('');
    const [userName, setUserName] = useState('');
    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');

    const navigate = useNavigate();

    const onChange = e => {
        const { value, name } = e.target;
        switch (name) {
            case 'userName':
                setUserName(value);
                console.log(userName);
                break;
            case 'userId':
                setUserId(value);
                console.log(userId);
                break;
            case 'password':
                setPassword(value);
                console.log(password);
                break;
            case 'passwordConfirm':
                setPasswordConfirm(value);
                console.log(passwordConfirm);
                break;
            default:
                break;
        }

    };

    const onSubmit = e => {
        e.preventDefault();
        if([userName, userId, password, passwordConfirm].includes('')) {
            setError('빈 칸을 모두 입력하세요.');
            return;
        }
        if(password !== passwordConfirm) {
            setError('비밀번호가 일치하지 않습니다.');
            setPassword('');
            setPasswordConfirm('');
            return;
        }
        console.log({userName, userId, password, passwordConfirm});
        setError('');
        //post
        const response = join({userName, userId, password});
        console.log(response);
        
        if(response===-1) {
            setError('이미 존재하는 계정명입니다.');
        }
        else {
            alert('회원가입이 완료되었습니다.');
            navigate('/');
        }
        
    };

    useEffect(() => {
        console.log(error);
    },[error])

/*
    useEffect(()=> {
        if(authError) {
            console.log('*' + authError);
            //계정명이 이미 존재할 때
            if(authError.response.status === 409) {
                setError('이미 존재하는 계정명입니다.');
                return;
            }
            //기타 이유
            setError('회원가입 실패');
            return;
        }
        if(auth) {
            console.log('회원가입 성공');
            console.log(auth);
            dispatch(check());
        }
    }, [auth, authError, dispatch]);

    

    useEffect(() => {
        if(user) {
            alert('회원가입이 완료 되었습니다!')
            navigate('/');
            try {
                localStorage.setItem('user', JSON.stringify(user));
            } catch (e) {
                console.log('localStorage is not working');
            }
        }
    }, [navigate, user]);
    */

    return (
        <AuthForm 
        type="join"
        form={{userName, userId, password, passwordConfirm}}
        onChange={onChange}
        onSubmit={onSubmit}
        error={error} />
    );
};

export default JoinForm;
import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//import { changeField, initializeForm, login } from '../main/modules/auth';
import { login } from './api/auth';
import AuthForm from './AuthForm';
import { useNavigate } from 'react-router-dom';
//import { check } from '../main/modules/user';

const LoginForm = () => {
    const [error, setError] = useState(null);
    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const onChange = e => {
        const { value, name } = e.target;
        switch (name) {
            case 'userId':
                setUserId(value);
                console.log(userId);
                break;
            case 'password':
                setPassword(value);
                console.log(password);
                break;
            default:
                break;
        }

    };

    const onSubmit = useCallback(async (e) => {
        try {
            e.preventDefault();
        if([userId, password].includes('')) {
            setError('빈 칸을 모두 입력하세요.');
            return;
        }
        console.log({userId, password});
        //post
        const response = await login({userId, password});
        console.log(response);
            alert('로그인 되었습니다.');
            navigate('/');
        }
        catch {
            setError('로그인 실패!');
        }
    });
/*
    useEffect(() => {
        if(authError) {
            console.log('오류 발생');
            console.log(authError);
            setError('로그인 실패');
            return;
        }
        if(auth) {
            console.log('로그인 성공');
            dispatch(check());
        }
    }, [auth, authError, dispatch]);

    useEffect(() => {
        if(user) {
            alert('로그인 되었습니다.')
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
            type="login"
            form={{userId, password}}
            onChange={onChange}
            onSubmit={onSubmit}
            error={error} />
    );
};

export default LoginForm;
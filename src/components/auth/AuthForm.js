import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Button from '../Button.js';

//회원가입 혹은 로그인 폼을 보여줌

const AuthFormBlock = styled.div`
    h3 {
        margin: 0;
        color: black;
        margin-bottom: 2rem;
        text-align: center;
    }
`;

const StyledInput = styled.input`
    font-size: 1rem;
    border: none;
    border-bottom: 1px solid black;
    padding-bottom: 0.5rem;
    outline: none;
    width: 100%;
    &:focus {
        color: $oc-teal-7;
        border-bottom: 1px solid red;
    }
    &+& {
        margin-top: 1.5rem;
    }
`;

const Footer = styled.div`
    margin-top: 2rem;
    text-align: right;
    a {
        color: mint;
        text-decoration: none;
        &:hover {
            text-decoration: underline;
        }
    }
`;

const ButtonWithMarginTop = styled(Button)`
    margin-top: 1rem`;

const textMap = {
    login: '로그인',
    join: '회원가입',
};

const ErrorMessage = styled.div`
    color: red;
    text-align: center;
    font-size: 0.875rem;
    margin-top: 1rem;
`;

const AuthForm = ({type, form, onChange, onSubmit, error}) => {
    const text = textMap[type];
  return <AuthFormBlock>
    <h3>{text}</h3>
    <form onSubmit={onSubmit}>
        {type==='join' && (
            <StyledInput name='userName' placeholder='이름' onChange={onChange} value={form.userName} />
        )}
        <StyledInput name='userId' placeholder='아이디' onChange={onChange} value={form.userId} />
        <StyledInput name='password' placeholder='비밀번호' type='password' onChange={onChange} value={form.password} />
        {type==='join' && (
            <StyledInput
                name='passwordConfirm'
                placeholder='비밀번호 확인'
                type='password'
                onChange={onChange}
                value={form.passwordConfirm} />
        )}
        <ErrorMessage>{error}</ErrorMessage>
        <ButtonWithMarginTop cyan="true" fullwidth="true" >{text}</ButtonWithMarginTop>
    </form>
    <Footer>
        {type === 'login' ? (<Link to="/join">회원가입</Link>) : (<Link to="/login">로그인</Link>)}
        
    </Footer>
  </AuthFormBlock>;
};

export default AuthForm;

import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from "../../images/logo.png";

//회원가입 혹은 로그인 페이지의 레이아웃을 담당하는 컴포넌트

const AuthTemplateBlock = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    background: #D8D8D8;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;    
`;

const WhiteBox = styled.div`
    .logo-area {
        padding-bottom: 3rem;
        text-align: center;
        font-weight: bold;
        letter-spacing: 2px;
    }
    box-shadow: 0 0 8px rgba(0,0,0,0.025);
    padding: 3rem;
    width: 360px;
    background: white;
    border-radius: 2px;
`;

const imgstyle = {
    width: '20px',
    marginRight: '10px'
};

const logoAreaStyle = {
    display: 'flex',
    alignItems: 'center'
};

const AuthTemplate = ({ children }) => {
  return <AuthTemplateBlock>
    <WhiteBox>
        <div className='logo-area' style={logoAreaStyle}>
            <img src={logo} style={imgstyle} />
            <Link to='/'>CREDIT PARTNER</Link>
        </div>
        {children}
    </WhiteBox>
  </AuthTemplateBlock>;
};

export default AuthTemplate;

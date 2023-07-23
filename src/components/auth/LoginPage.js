import React from 'react';
import LoginForm from './LoginForm';
import AuthTemplate from './AuthTemplate';

const LoginPage = () => {
    return (
      <AuthTemplate>
        <LoginForm type="login" />
      </AuthTemplate>
    );
  };

export default LoginPage;
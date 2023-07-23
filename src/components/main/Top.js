import React from "react";
import logo from "../../images/logo.png";
import "./styles/top.css";
import { Link } from "react-router-dom";

const Top = () => {
  return (
    <div className="top">
      <Link to="/">
        <span className="logoNtitle">
          <img src={logo} />
          <span className="title">CREDIT PARTNER</span>
        </span>
      </Link>
      

      <span className="auth">
        <Link to="/login">
          <span className="authmenu">로그인</span>
        </Link>
        <Link to="/join">
          <span className="authmenu">회원가입</span>
        </Link>
      </span>
    </div>
  );
};

export default Top;

import React, { useState, createContext, useEffect } from "react";
import ChatbotInput from "./ChatbotInput";
import Container from "./Container";
import Header from "./Header";
import { useNavigate } from 'react-router-dom';


const desktop = {
  width: "600px",
  height: "100vh",
  marginLeft: "auto",
  marginRight: "auto",
  display: "relative"
};

export const MyContext = createContext();

const ChatbotTemplate = () => {

  const navigate = useNavigate();

  useEffect(() => {
    if(window.localStorage.length===0) {
        navigate('/login');
        console.log("$");
      }
    console.log("*");
  },[]);
  console.log("@");
    

  const [inputText, setInputText] = useState('');
  const [ableSend, setAbleSend] = useState(false);
  const [answer3, setAnswer3] = useState('');
  const [answer4, setAnswer4] = useState('');
  const [answer6, setAnswer6] = useState('');
  const [answer9, setAnswer9] = useState([]);
  const [questionNum, setQuestionNum] = useState(0);

  return (
    <div style={desktop}>
        <Header />
        <MyContext.Provider value={{answer3, answer4, answer6, answer9, questionNum, setQuestionNum}}>
          <Container inputText={inputText} setAbleSend={setAbleSend} />
        </MyContext.Provider>
        <ChatbotInput ableSend={ableSend} q={questionNum} setq={setQuestionNum} seta3={setAnswer3} seta4={setAnswer4} seta6={setAnswer6} seta9={setAnswer9} />
    </div>
  );
};

export default ChatbotTemplate;

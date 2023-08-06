import React from "react";
import ChatbotInput from "./ChatbotInput";
import Container from "./Container";
import Header from "./Header";

const desktop = {
  width: "600px",
  height: "100vh",
  marginLeft: "auto",
  marginRight: "auto",
  display: "relative"
};

const ChatbotTemplate = () => {
  return (
    <div style={desktop}>
        <Header />
        <Container />
        <ChatbotInput />
    </div>
  );
};

export default ChatbotTemplate;

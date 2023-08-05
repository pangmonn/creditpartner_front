import "./App.css";
import { Route, Routes } from "react-router-dom";
import Template from "./components/main/MainTemplate";
import LoginPage from "./components/auth/LoginPage";
import JoinPage from "./components/auth/JoinPage";
import CreditsTemplate from "./components/credits/CreditsTemplate";
import MyPageTemplate from "./components/mypage/MypageTemplate";
import MajorTemplate from "./components/major/MajorTemplate";
import ChatbotTemplate from "./components/chatbot/ChatbotTemplate";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Template />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/join" element={<JoinPage />} />
      <Route path="/credits" element={<CreditsTemplate />} />
      <Route path="/mypage" element={<MyPageTemplate />} />
      <Route path="/major" element={<MajorTemplate />} />
      <Route path="/chatbot" element={<ChatbotTemplate />} />
    </Routes>
  );
}

export default App;
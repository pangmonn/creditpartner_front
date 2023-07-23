import "./App.css";
import { Route, Routes } from "react-router-dom";
import Template from "./components/main/MainTemplate";
import LoginPage from "./components/auth/LoginPage";
import JoinPage from "./components/auth/JoinPage";
import CreditsTemplate from "./components/credits/CreditsTemplate";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Template />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/join" element={<JoinPage />} />
      <Route path="/credits" element={<CreditsTemplate />} />
    </Routes>
  );
}

export default App;

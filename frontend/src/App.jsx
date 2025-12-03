import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Start from "./pages/Start";
import UserLogin from "./pages/UserLogin";
import UserSignup from "./pages/UserSignup";
import CaptainLogin from "./pages/CaptainLogin";
import CaptainSignup from "./pages/CaptainSignup";
import CaptainRiding from "./pages/CaptainRiding";
import Home from "./pages/Home";
import UserContext from "./context/UserContext";
import UserProtectedWrapper from "./pages/UserProtectedWrapper";
import CaptainProtectedWrapper from "./pages/CaptainProtectWrapp";
import UserLogout from "./pages/UserLogout";
import CaptainHome from "./pages/CaptainHome";
import Riding from "./pages/Riding";
import 'remixicon/fonts/remixicon.css';

const App = () => {
  return (
    <UserContext>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/signup" element={<UserSignup />} />
        <Route path="/riding" element={<Riding />} />
        <Route path="/captain-riding" element={<CaptainRiding />} />
        <Route path="/captain-login" element={<CaptainLogin />} />
        <Route path="/captain-signup" element={<CaptainSignup />} />
        <Route path="/home" element={
          <UserProtectedWrapper>
            <Home />
          </UserProtectedWrapper>} />
        <Route path="/user/logout" element={
          <UserProtectedWrapper>
            <UserLogout />
          </UserProtectedWrapper>} />
        <Route path="/captain-home" element={
          <CaptainProtectedWrapper>
            <CaptainHome />
          </CaptainProtectedWrapper>} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </UserContext>
  );
};

export default App;

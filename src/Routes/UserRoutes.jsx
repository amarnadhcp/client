import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/user/Home";
import Profile from "../pages/user/ProFile"
import Login from "../pages/user/Login";
import Register from "../pages/user/Register";
import EmailVerify from "../components/Emailverify/EmailVerify";

import UserPublic from "../protected/UserPublic";
import UserProtect from "../protected/UserProtected";
import PageNotFound from "../pages/pagenotFound/PageNotFound";





const UserRoutes = () => {
  return (
    <Routes>
      <Route  path="*" element={<PageNotFound/>}/>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/login" element={<UserPublic>      <Login />     </UserPublic>} />
      <Route exact path="/register" element={<UserPublic><Register /></UserPublic>} />
      <Route exact path="/:id/verify/:token" element={<EmailVerify />} />
      <Route exact path="/profile" element={<UserProtect>  <Profile />  </UserProtect>} />

    </Routes>
  );
};






export default UserRoutes;

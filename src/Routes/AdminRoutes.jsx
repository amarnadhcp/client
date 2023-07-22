import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../pages/Admin/Login"
import Home from "../pages/Admin/Home";
// import AdminProtected from "../protected/AdminProtected";
import AdminPublic from "../protected/AdminPublic";

const AdminRoutes = ()=>{
    return(
    <Routes>

      <Route  path="/*" element={<Home/>}/>
      <Route exact path="/login" element={  <AdminPublic> <Login/>   </AdminPublic>    }/>

    </Routes>
    )
}


export default AdminRoutes
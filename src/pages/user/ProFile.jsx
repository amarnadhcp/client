import React from "react";
import NavBar from "../../components/user/NavBar"
import Footer from "../../components/user/Footer";
import Profile from "../../components/profile/Profile";
import SellersProfile from "../../components/profile/SellersProfile";
import { useSelector } from "react-redux";
const ProFile = () =>{
   const{isSeller}=useSelector(state=>state.user)
   return(
    <div>
      <NavBar/>
      {isSeller ? <SellersProfile /> : <Profile />}
      <Footer/>
   </div>
   )
}



export default  ProFile
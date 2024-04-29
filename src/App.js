import './App.css';

import WebFont from "webfontloader"
import Header from './Component/Layout/Header/Header';
import Footer from './Component/Layout/Footer/Footer';
import Home from './Component/Home/Home';
import LoginSignup from "./Component/User/LoginSignup"
import Profile from './Component/User/Profile';
import Donate from "./Component/User/donate"
import Login from './Component/User/Login';
import Register from './Component/User/Register';
import Hospitalhome from "./Component/Hospital/Hospitalhome"
import LoginForm from './Component/Hospital/HospitalLogin';
import React, { useState} from "react";
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import store from "./store"
import { loadUser } from './actions/userAction';
import UserOption from "./Component/Layout/Header/UserOption"
import axios from 'axios';
import ContactUsPage from './Component/Layout/Contact/ContactUsPage';
import { useSelector } from 'react-redux';
import Admin from './Admin/Admin';
import HospLoginSignup from './Component/Hospital/hosploginsignup';
import SearchBloodForm from './userDashboard/NavRoute/SearchBloodForm';
import AboutUsPage from './Component/Layout/About/AboustUsPage';
// import UpdateProfile from './Component/User/UpdateProfile';
// import UpdatePassword from './Component/User/UpdatePassword';

import MainDash from "./userDashboard/Maindash" 

function App() {

    //we have both isauthenticated and user in user state
    const {user,isAuthenticated}=useSelector(state=>state.user);
    const  hosp=useSelector(state=>state.hospital)
    


  React.useEffect(()=>{
    WebFont.load({
      google:{
        families:["Roboto","Droid Sans","Chilanka"],
      },
    });

    // store.dispatch(loadUser())
  },[]);

  return <Router>
       {!isAuthenticated && !hosp.isAuthenticated && <Header/>}
  

    {/* {isAuthenticated && <UserOption user={user}/>} */}

    <Routes>  
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
        <Route path="/account" element={<MainDash/>}/>
        <Route path="/donate" element={<Donate handle="donate"/>}/>
        <Route path="/receiver" element={<Donate/>}/>
        <Route path="/hospital" element={<Hospitalhome/>}/>
        <Route path='/hospitallogin' element={<HospLoginSignup/>}/>
        <Route path='/contact' element={<ContactUsPage/>}/>
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/searchblood' element={<SearchBloodForm/>}/>
        <Route path='/about' element={<AboutUsPage/>}/>
        {/* <Route path='/me/update' element={<UpdateProfile/>}/>
        <Route path='/password/update' element={<UpdatePassword/>}/>
 */}





        {/* <Route path="/login" element={<Login/>}/> */}
        {/* <Route path="/register" element={<Register/>}/> */}
    </Routes>

    <Footer/>
    {/* <Toaster/> */}
  </Router>
}

export default App;

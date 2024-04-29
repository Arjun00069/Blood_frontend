import React,{useState,useEffect,Fragment,useRef} from 'react'
import "../User/login.css"
import {Link,useLocation} from "react-router-dom"
import MailOutlineIcon from "@material-ui/icons/MailOutline"
import LockOpenIcon from "@material-ui/icons/LockOpen"
import CallSplitIcon from '@material-ui/icons/CallSplit';
import FaceIcon from "@material-ui/icons/Face";
import { useDispatch, useSelector } from "react-redux";
import {useNavigate} from "react-router-dom"
import DeviceUnknownIcon from '@material-ui/icons/DeviceUnknown';
import InvertColorsIcon from '@material-ui/icons/InvertColors';
import PeopleIcon from '@material-ui/icons/People';
import MuseumIcon from '@material-ui/icons/Museum';
import { login ,clearErrors,register} from '../../actions/userAction'
import Form from "../../Pages/shared/Form"
import Header from '../Layout/Header/Header';
import { loadHospital } from '../../actions/hospitalAction'
const HospLoginSignup = () => {
    const location=useLocation();
    const dispatch=useDispatch();
    const history=useNavigate();
    const {error,isAuthenticated,loading} =useSelector((state)=>state.hospital)

    const loginTab = useRef(null);
    const registerTab = useRef(null);
    const switcherTab = useRef(null);

    const [loginEmail,setLoginEmail]=useState("");
    const [loginPassword,setLoginPassword]=useState("");
    
    const [role, setRole] = useState("donar");
    

    const redirect=location.search ? location.search.split("=")[1] : "/account"




    const [user,setUser]=useState({
      name:"",
      email:"",
      password:"",
      age:"",
      phone:"",
      bloodgrp:"",
      gender:"",
      address:""
    });

    const{name,email,password,age,phone,bloodgrp,gender,address}=user
  
  
    const [avatar,setAvatar]=useState("/Profile.png");
    const [avatarPreview,setAvatarPreview]=useState("../../images/Profile.png");

    useEffect(()=>{
      if(error){
        alert(error);
        dispatch({
          type: "clearError",
        });
      }
      if(isAuthenticated&&loading===false){
        history("/hospital")
      }
    },[dispatch,error,history,isAuthenticated])
    

    const switchTabs = (e, tab) => {
      if (tab === "login") {
          //same opposite to register
        switcherTab.current.classList.add("shiftToNeutral");
        switcherTab.current.classList.remove("shiftToRight");
  
        registerTab.current.classList.remove("shiftToNeutralForm");
        loginTab.current.classList.remove("shiftToLeft");
      }
      if (tab === "register") {
          //register click hote hi right me shift hoga aur neutral se hat jaiga
        switcherTab.current.classList.add("shiftToRight");
        switcherTab.current.classList.remove("shiftToNeutral");
  
        //register aa jaiga login left me chala jaiga nhi dikhega
        registerTab.current.classList.add("shiftToNeutralForm");
        loginTab.current.classList.add("shiftToLeft");
      }
    };



    const loginSubmit=(e)=>{
      e.preventDefault();

      try {
        // Send a POST request to the backend endpoint
        // console.log(loginEmail,loginPassword);
        dispatch(loadHospital({
          email:loginEmail,
          password:loginPassword
        }))
       if(isAuthenticated) history("/hospital")
        setLoginEmail('')
        setLoginPassword('')

       
      } catch (error) {
        // Handle login error (display an error message, redirect, etc.)
        console.error('Login failed', error.message);
      }
      
    }

    const registerSubmit=(e)=>{
      e.preventDefault();
      const myForm={
        name:name,
        email:email,
        password:password,
        age:age,
        phone:phone,
        bloodgrp:bloodgrp,
        gender:gender,
        address:address,
        avatar:avatar
      }
      dispatch(register(myForm))
     
    }

    const registerDataChange = (e) => {
      if(e.target.name==="avatar"){
        const reader = new FileReader();
        reader.onload=()=>{
          if(reader.readyState===2){
            setAvatarPreview(reader.result);
            setAvatar(reader.result);
          }
        }
        reader.readAsDataURL(e.target.files[0]);
      }
      else{
        setUser({...user,[e.target.name]:e.target.value})
      }
    };

  return (
    <Fragment>
  
      <div className="LoginSignUpContainer">
        <div className="LoginSignUpBox">

          <div>
            <div className='login_signUp_toggle'>
                <p onClick={(e)=>switchTabs(e,"login")}>LOGIN</p>
                <p onClick={(e)=>switchTabs(e,"register")}>REGISTER</p>
            </div>
            <button ref={switcherTab}></button>
          </div>
          
          <form className='loginForm' ref={loginTab} onSubmit={loginSubmit}>
          <div className="loginEmail">
                  <MailOutlineIcon />
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                  />
                </div>  

                <div className="loginPassword">
                  <LockOpenIcon />
                  <input
                    type="password"
                    placeholder="Password"
                    required
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                  />
                </div>

                

                <Link to="/password/forgot">Forgot Password ?</Link>
                <input type="submit" value="Login" className="loginBtn" />
          </form>



          <form className='signUpForm' ref={registerTab} encType='multipart/form-data' onSubmit={registerSubmit}>
          <div className="signUpName">
                  <FaceIcon />
                  <input
                    type="text"
                    placeholder="Name"
                    required
                    name="name"
                    value={name}
                    onChange={registerDataChange}
                  />
                </div>
                <div className="signUpEmail">
                  <MailOutlineIcon />
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    name="email"
                    value={email}
                    onChange={registerDataChange}
                  />
                </div>
                <div className="signUpPassword">
                  <LockOpenIcon />
                  <input
                    type="password"
                    placeholder="Password"
                    required
                    name="password"
                    value={password}
                    onChange={registerDataChange}
                  />
                </div>

               <div className="signUpAge">
                 <CallSplitIcon/>
                  <input
                    type="number"
                    placeholder="Age"
                    required
                    name="age"
                    value={age}
                    onChange={registerDataChange}
                  />
                </div>

                <div className="signUpMobile">
                <DeviceUnknownIcon/>
                  <input
                    type="number"
                    placeholder="Contact Number"
                    required
                    name="phone"
                    value={phone}
                    onChange={registerDataChange}
                  />
                </div>

            

            <div className="signUpaddress">
                  <MuseumIcon/>
                  <input
                    type="text"
                    placeholder="Address"
                    required
                    name="address"
                    value={address}
                    onChange={registerDataChange}
                  />
                </div>

            

                <input type="submit" value="Register" className="signUpBtn" />

          </form>


        </div>
      </div>
    </Fragment>
  )
}

export default HospLoginSignup

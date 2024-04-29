import React,{useState,useEffect,Fragment,useRef} from 'react'
import "./LoginSignup.css"
import {Link,useLocation} from "react-router-dom"
import MailOutlineIcon from "@material-ui/icons/MailOutline"
import LockOpenIcon from "@material-ui/icons/LockOpen"
import CallSplitIcon from '@material-ui/icons/CallSplit';
import FaceIcon from "@material-ui/icons/Face";
import { useDispatch, useSelector } from "react-redux";
import {useNavigate} from "react-router-dom"
import DeviceUnknownIcon from '@material-ui/icons/DeviceUnknown';
import MuseumIcon from '@material-ui/icons/Museum';
import { login ,clearErrors,register} from '../../actions/userAction' //redux

const LoginSignup = () => {
    const location=useLocation();
    const dispatch=useDispatch();
    const history=useNavigate();

    const {error,loading,isAuthenticated}=useSelector(state=>state.user)

    const loginTab = useRef(null);
    const registerTab = useRef(null);
    const switcherTab = useRef(null);

    const [loginEmail,setLoginEmail]=useState("");
    const [loginPassword,setLoginPassword]=useState("");
    const [role, setRole] = useState("donar");
    const [csrfToken, setCsrfToken] = useState('');
    

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
        dispatch(clearErrors());
      }
      if(isAuthenticated){
        history("/account")
      }

  //         // Fetch CSRF token from server
  //   async function fetchCsrfToken() {
  //     try {
  //         const response = await fetch('http://localhost:4000/csrf-token');
  //         const data = await response.json();
  //         setCsrfToken(data.csrfToken);
  //     } catch (error) {
  //         console.error('Error fetching CSRF token:', error);
  //     }
  // }


  //     fetchCsrfToken();
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




     //Redux
    const loginSubmit=(e)=>{
      e.preventDefault();

      dispatch(login(loginEmail,loginPassword))
      
    }
     //Redux
    const registerSubmit=(e)=>{
      e.preventDefault();
      const payload = new FormData();
      payload.append("name", name)
      payload.append("email", email)
      payload.append("password", password)
      payload.append("age", age)
      payload.append("phone", phone)
      payload.append("bloodgrp", bloodgrp)
      payload.append("gender", gender)
      payload.append("address", address)
      payload.append("avatar", avatar)
      // for (var pair of payload.entries()) {
      //     console.log(pair[1]); 
      // }

      // const myForm={
      //   name:name,
      //   email:email,
      //   password:password,
      //   age:age,
      //   phone:phone,
      //   bloodgrp:bloodgrp,
      //   gender:gender,
      //   address:address,
      //   avatar:avatar
      // }
      dispatch(register(payload))     
    }
      
    const registerDataChange = (e) => {
      if(e.target.name==="avatar"){
        // const reader = new FileReader();
        // reader.onload=()=>{
        //   if(reader.readyState===2){
        //     setAvatarPreview(reader.result);
        //     setAvatar(reader.result);
        //   }
        // }
        // reader.readAsDataURL(e.target.files[0]);
        setAvatar(e.target.files[0]);
      }
      else{
        setUser({...user,[e.target.name]:e.target.value})
      }
    };

  return (
    <Fragment>
  
      <div className="LoginSignUpContainer">
        <div className="LoginSignUpBox" style={{overflowY:"scroll"}}>

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
                    placeholder="Phone Number"
                    required
                    name="phone"
                    value={phone}
                    onChange={registerDataChange}
                  />
                </div>

              <div className="signupBlood">
               
              <select name="bloodgrp"
               value={bloodgrp} 
               onChange={registerDataChange}
               >
              <option value="">Blood Group</option>

                <option value="O+">O+ (O positive)</option>
                <option value="O-">O- (O negative)</option>
                <option value="A+">A+ (A positive)</option>
                <option value="A-">A- (A negative)</option>
                <option value="B+">B+ (B positive)</option>
                <option value="B-">B− (B negative)</option>
                <option value="AB+">AB+ (AB positive)</option>
                <option value="AB-">AB− (AB negative)</option>
              </select>
            </div>

            <div className="signUpGender">
              
            <select name="gender"
              value={gender}
              onChange={registerDataChange}
            >
              <option value="">Gender</option>

                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
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

                <div id="registerImage">
                  <img src={avatarPreview} alt="Avatar Preview" />
                  <input
                    type="file"// to upload file 
                    name="avatar"
                    accept="image/*"
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

export default LoginSignup

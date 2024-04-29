import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Fragment,useEffect } from 'react';
import {useNavigate} from "react-router-dom"
import UserOption from '../../Component/Layout/Header/UserOption';
import './Profile.css'
// import userpng from "../../imgs/userpng.jpg"

const Profile = () => {

  const history=useNavigate();
  const {user,loading,isAuthenticated}=useSelector((state)=>state.user)
    // console.log(user)
    useEffect(()=>{
        if(isAuthenticated===false){
            history("/login");
        }
    },[history,isAuthenticated]);


  return (
      <Fragment>
       {isAuthenticated && <UserOption user={user}/>}
        <div className="profileContainer">
          <div>
            {/* <p>photo</p> */}
            <img src={user.avatar} alt={user.name} />
          </div>

          <div className='profileInfo' style={{fontSize : "18px"}}>
          <div>
          <p style={{ fontSize: "18px" }}><strong>Full Name:</strong>{user.name}</p>
            </div><br />
            <div>
              <p style={{ fontSize: "18px" }}><strong>Email:</strong>{user.email}</p>
            </div><br />
            <div>
              <p style={{ fontSize: "18px" }}><strong>Age:</strong>{user.age}</p>
            </div><br />
            <div>
              <p style={{ fontSize: "18px" }}><strong>Blood Group:</strong>{user.bloodgrp}</p>
            </div><br />
            <div>
              <p style={{ fontSize: "18px" }}><strong>Role:</strong>{user.role}</p>
            </div>
          </div>
        </div>
      </Fragment>
 
  );
}

export default Profile;

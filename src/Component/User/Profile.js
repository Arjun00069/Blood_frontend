import React from 'react'
import "./Profile.css"
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Fragment,useEffect } from 'react';
import {useNavigate} from "react-router-dom"
import UserOption from '../Layout/Header/UserOption';
const Profile = () => {

    const history=useNavigate();
    const {user,loading,isAuthenticated}=useSelector((state)=>state.user)
    console.log(user)
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
  <h1>My Profile</h1>
  <img src={user.avatar} alt={user.name} />
  <Link to="/me/update">Edit Profile</Link>
</div>


<div>
  <div>
    <h4>Full Name</h4>
    <p>{user.name}</p>
  </div>
  <div>
    <h4>Email</h4>
    <p>{user.email}</p>
  </div>
  <div>
    <h4>Age</h4>
    <p>{user.age}</p>
  </div>
  <div>
    <h4>Blood Group</h4>
    <p>{user.bloodgrp}</p>
  </div>
  <div>
    <h4>Role</h4>
    <p>{user.role}</p>
  </div>

  <div>
    <Link to="/donation">My Donations</Link>
    <Link to="/searchblood">Hospital search</Link>
    <Link to="/password/update">Change Password</Link>
  </div>
</div>

</div>
 
    </Fragment>
  )
}

export default Profile

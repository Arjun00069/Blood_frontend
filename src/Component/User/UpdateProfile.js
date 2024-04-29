import React, { Fragment, useState,useEffect} from 'react'
import "./UpdateProfile.css";
// import Loader from "../layout/loader/Loader";

import MailOutlineIcon from "@material-ui/icons/MailOutline"
import FaceIcon from "@material-ui/icons/Face";
import { useDispatch, useSelector } from "react-redux";
import {  updateProfile,clearError,loadUser } from "../../actions/userAction.js";
import {useNavigate} from "react-router-dom"
import { UPDATE_PROFILE_RESET } from "../../Constant/userConstant.js";
// import MetaData from "../layout/MetaData";
import CallSplitIcon from '@material-ui/icons/CallSplit';
// import FaceIcon from "@material-ui/icons/Face";




const UpdateProfile = () => {

    const dispatch=useDispatch();
 
    const history=useNavigate();

     //useSelector
  const {user} = useSelector((state) => state.user);
  const {error,isUpdated,loading}=useSelector((state)=>state.profile);


  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [bloodgrp,setbloodgrp]=useState("");
  const [phone,setphone]=useState("");//taking from public folder

      // register submit gives
  const updateProfileSubmit=(e)=>{
    e.preventDefault();

    // making data from form
    // const myForm = {
    //   name: name,
    //   email: email,
    //   bloodgrp:bloodgrp,
    //   phone:phone
    // }

    const myForm = new FormData();
    myForm.append("name",name)
    myForm.append("email",email)
    myForm.append("bloodgrp",bloodgrp)
    myForm.append("phone",phone);
    
    dispatch(updateProfile(myForm));
  }

// onsubmit register form
// const updateProfileDataChange = (e) => {
//     e.preventDefault();

//   };

          //useeffect
  useEffect(() => {
    if (user) {
        setName(user.name);
        setEmail(user.email);
        setbloodgrp(user.bloodgrp);
        setphone(user.phone)
      }

      if (error) {
        alert(error);
        // dispatch(clearError());
      }

      if (isUpdated) {
        alert("Profile Updated Successfully");
        dispatch(loadUser());
  
        history("/account");
  
        dispatch({
          type: UPDATE_PROFILE_RESET,
        });
      }

  }, [dispatch, error, history, user, isUpdated]);



  return (
    <Fragment>
      
       
      
          <div className="updateProfileContainer">
            <div className="updateProfileBox">
              <h2 className="updateProfileHeading">Update Profile</h2>

              <form
                className="updateProfileForm"
                encType="multipart/form-data"
                onSubmit={updateProfileSubmit}
              >
                <div className="updateProfileName">
                  <FaceIcon />
                  <input
                    type="text"
                    placeholder="Name"
                    required
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="updateProfileEmail">
                  <MailOutlineIcon />
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="updateProfileEmail">
                  <FaceIcon />
                  <input
                    type="text"
                    placeholder="Blood Group"
                    required
                    name="bloodgrp"
                    value={bloodgrp}
                    onChange={(e) => setbloodgrp(e.target.value)}
                  />
                </div>
                <div className="updateProfileEmail">
                  <CallSplitIcon/>
                  <input
                    type="number"
                    placeholder="Phone"
                    required
                    name="phone"
                    value={phone}
                    onChange={(e) => setphone(e.target.value)}
                  />
                </div>


                <input
                  type="submit"
                  value="Update"
                  className="updateProfileBtn"
                />
              </form>
            </div>
          </div>
        </Fragment>
      )}

export default UpdateProfile

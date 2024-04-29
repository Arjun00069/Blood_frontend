import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    REGISTER_USER_REQUEST,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAIL,
    CLEAR_ERRORS,
    LOAD_USER_FAIL,
    LOAD_USER_REQUEST,
    LOAD_USER_SUCCESS,
    LOGOUT_FAIL,
    LOGOUT_SUCCESS,
    UPDATE_PROFILE_FAIL,
    UPDATE_PROFILE_REQUEST,
    UPDATE_PROFILE_RESET,
    UPDATE_PROFILE_SUCCESS,
    UPDATE_PASSWORD_REQUEST,
    UPDATE_PASSWORD_SUCCESS,
    UPDATE_PASSWORD_FAIL,
    ALL_HOSPITALS_SUCCESS,
    ALL_HOSPITALS_FAIL,
    ALL_HOSPITALS_REQUEST,
    DELETE_HOSPITAL_FAIL,
    DELETE_HOSPITAL_REQUEST,
    DELETE_HOSPITAL_RESET,
    DELETE_HOSPITAL_SUCCESS,
    UPDATE_HOSPITAL_FAIL,
    UPDATE_HOSPITAL_REQUEST,
    UPDATE_HOSPITAL_RESET,
    UPDATE_HOSPITAL_SUCCESS,
    HOSPITAL_DETAILS_FAIL,
    HOSPITAL_DETAILS_REQUEST,
    HOSPITAL_DETAILS_SUCCESS
}
from "../Constant/userConstant"

import axios from 'axios';

export const login=(email,password)=>async(dispatch)=>{
    try{

        dispatch({type:LOGIN_REQUEST
        });
       
        const {data}= await axios.post(`http://localhost:4000/blood/v1/login`,{email,password},{
          withCredentials:true
        })
        console.log(data.user)
        localStorage.setItem("userInfo",data.user._id);
        dispatch({ type: LOGIN_SUCCESS, payload: data.user });

    }catch(error){
      console.log(error)
        dispatch({type:LOGIN_FAIL,payload:error.response.data.msg})
    }
}

// Register(userdata is myform data in loginsignup)
export const register = (userData) => async (dispatch) => {
    try {
      dispatch({ type: REGISTER_USER_REQUEST });
  
      const { data } = await axios.post(`http://localhost:4000/blood/v1/register`, userData, {
        withCredentials:true,
        headers: {"Content-Type": "multipart/form-data"}
      });
  
      dispatch({ type: REGISTER_USER_SUCCESS, payload: data.user });
    } catch (error) {
      dispatch({
        type: REGISTER_USER_FAIL,
        payload: error.response.data.message
      });
    }
  };

  // Load User(login access nhi hoga aur ye app.js me h)
  export const loadUser=()=>async(dispatch)=>{
    try{
      dispatch({type:LOAD_USER_REQUEST})
      const {data}=await axios.get(`http://localhost:4000/blood/v1/me`,{
        withCredentials:true
      });
      dispatch({ type: LOAD_USER_SUCCESS, payload: data.user });
    }catch(error){
      dispatch({type:LOAD_USER_FAIL,payload:error.response.data.message})
    }
  }


  export const logout=()=>async(dispatch)=>{
    try{
      await axios.get(`http://localhost:4000/blood/v1/logout`,{
        withCredentials:true
      });
      dispatch({type:LOGOUT_SUCCESS})
    }catch(error){
      dispatch({type:LOGOUT_FAIL,payload:error.response.data.message})
    }
  }


// Update Profile
export const updateProfile = (userData) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_PROFILE_REQUEST });

    const { data } = await axios.put(`http://localhost:4000/blood/v1/me/update`, userData,{
      withCredentials:true
    });
    console.log(userData);
    dispatch({ type: UPDATE_PROFILE_SUCCESS, payload: data.success });
  } catch (error) {
    dispatch({
      type: UPDATE_PROFILE_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const clearErrors=()=>async(dispatch)=>{
    dispatch({type:CLEAR_ERRORS})
}

// Update Password
export const updatePassword = (passwords) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_PASSWORD_REQUEST });


    const { data } = await axios.put(
      `http://localhost:4000/blood/v1/password/update`,
      passwords,{ withCredentials:true}
    );

    dispatch({ type: UPDATE_PASSWORD_SUCCESS, payload: data.success });
  } catch (error) {
    dispatch({
      type: UPDATE_PASSWORD_FAIL,
      payload: error.response.data.message,
    });
  }
};



// Get all hospital Details
export const getAllHospitals = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_HOSPITALS_REQUEST });

    const { data } = await axios.get("http://localhost:4000/blood/v1/admin/allhospital");
    console.log(data);
    dispatch({ type: ALL_HOSPITALS_SUCCESS, payload: data.hospitals });
  } catch (error) {
    dispatch({
      type: ALL_HOSPITALS_FAIL,
      payload: error.response.data.message,
    });
  }
};


// Update HOSPITAL
export const updateHospitalStatus = (id,newstatus) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_HOSPITAL_REQUEST });
  console.log('called');
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.put(
      `http://localhost:4000/blood/v1/admin/status/${id}`,
      {Status:newstatus},
      config
    );

    dispatch({ type:UPDATE_HOSPITAL_SUCCESS, payload: data.success });
  } catch (error) {
    dispatch({
      type: UPDATE_HOSPITAL_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Delete HOSPITAL
export const deleteHospital = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_HOSPITAL_REQUEST });

    const { data } = await axios.delete(`http://localhost:4000/blood/v1/admin/deletehospital/${id}`);

    dispatch({ type: DELETE_HOSPITAL_SUCCESS, payload: data.success });
  } catch (error) {
    if(error)
    dispatch({
      type: DELETE_HOSPITAL_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Get Hospital Details
export const getHospitalDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: HOSPITAL_DETAILS_REQUEST });

    const { data } = await axios.get(`http://localhost:4000/blood/v1/admin/gethospital/${id}`);

    dispatch({ type: HOSPITAL_DETAILS_SUCCESS, payload: data.order });
  } catch (error) {
    dispatch({
      type: HOSPITAL_DETAILS_FAIL,
      payload: error.response.data.message,
    });
  }
};
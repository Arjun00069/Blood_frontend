import React, { useState ,useEffect} from 'react';
import { useNavigate} from "react-router-dom"
import axios from 'axios';
import { useDispatch,useSelector } from "react-redux"
import './login.css'
import { loadHospital } from  '../../actions/hospitalAction.js';
const LoginForm = () => {
    const dispatch =useDispatch()
    const history = useNavigate()
    const {error,isAuthenticated,loading} =useSelector((state)=>state.hospital)
    useEffect(()=>{
        if(error){
          alert(error);
          dispatch({
            type: "clearError",
          });
        }
        // if(isAuthenticated&&loading===false){
        //   history("/hospital")
        // }
      },[dispatch,error,history,isAuthenticated])
      
  // State to hold user input
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  // Function to handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [name]: value, //[] dynamic ke liye use hota hai e.target me name bhi contain hota hai e.target.name name jo form me provide kiya gyahai
    }));
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send a POST request to the backend endpoint
      dispatch(loadHospital(credentials))
      setCredentials({
        email: '',
        password: '',
      });
     
    } catch (error) {
      // Handle login error (display an error message, redirect, etc.)
      console.error('Login failed', error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input
          type="text"
          name="email"
          value={credentials.email}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          name="password"
          value={credentials.password}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;

import React from 'react'
import InputType from "../../Pages/shared/InputType"
import Form from "../../Pages/shared/Form"
import "./login.css"

const Login = () => {
  return (
    <>
      <div className="row g-1">
          <div className="col-md-8 form-banner">
              <img src="../../images/2738493.jpg" alt="loginimage" />
          </div>
          <div className="col-md-4 form-container">
              <Form formTitle={'Login'} submitBtn={'Login'} formType={"login"}/>
          </div>
      </div>
    </>
  )
}

export default Login

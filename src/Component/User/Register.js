import React from 'react'
import Form from "../../Pages/shared/Form"
import "./login.css"

const Register = () => {
  return (
    <>
      <div className="row g-0">

          <div className="col-md-8 form-banner">
              <img src="../../images/2711595.jpg" alt="registerImage" />
          </div>

          <div className="col-md-4 form-container">
            <Form formTitle={'Register'} submitBtn={'Register'} formType={'register'}/>
          </div>
      </div>
    </>
  )
}

export default Register

import React, { useState } from 'react';
import InputType from "./InputType";
import { Link } from "react-router-dom";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import CallSplitIcon from '@material-ui/icons/CallSplit';
import FaceIcon from "@material-ui/icons/Face";
import DeviceUnknownIcon from '@material-ui/icons/DeviceUnknown';
import InvertColorsIcon from '@material-ui/icons/InvertColors';
import PeopleIcon from '@material-ui/icons/People';
import MuseumIcon from '@material-ui/icons/Museum';
import "./form.css";

const Form = ({ formType, submitBtn, formTitle }) => {


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState('');
    const [role, setRole] = useState("donar");
    const [name, setName] = useState("");
    const [organisationName, setOrganisationName] = useState("");
    const [hospitalName, setHospitalName] = useState("");
    const [website, setWebsite] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [avatar, setAvatar] = useState("/Profile.png");
    const [avatarPreview, setAvatarPreview] = useState("../../images/Profile.png");

    function handleLogin(){

    }

    function handleRegister(){
       
    }

    return (
        <div>
            <form onSubmit={(e) => {
                if (formType === "login")
                    return handleLogin(e, email, password, role);
                else if (formType === "register")
                    return handleRegister(
                        e,
                        name,
                        role,
                        email,
                        password,
                        phone,
                        organisationName,
                        address,
                        hospitalName,
                        website,
                        avatar
                    );
            }}>
                <h1 className='text-center'>{formTitle}</h1>
                <hr />

                <div className="d-flex mb-3">
                    {/* Radio buttons for role selection */}
                    {/* ... (same as before) */}
                </div>

                {(() => {
                    switch (true) {
                        case formType === "login": {
                            return (
                                <>
                                    {/* Input fields for login */}
                                    <InputType
                                        labelText={"Email"}
                                        labelFor={"forEmail"}
                                        inputType={"email"}
                                        name={"email"}
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    <InputType
                                        labelText={"Password"}
                                        labelFor={"forPassword"}
                                        inputType={"password"}
                                        name={"password"}
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </>
                            );
                        }
                        case formType === "register": {
                            return (
                                <>
                                    {/* Common input fields for both roles */}
                                    {(role === "admin" || role === "donar") && (
                                        <InputType
                                            labelText={"Name"}
                                            labelFor={"forName"}
                                            inputType={"text"}
                                            name={"name"}
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                        />
                                    )}
                                    {role === "organisation" && (
                                        <InputType
                                            labelText={"Organisation Name"}
                                            labelFor={"fororganisationName"}
                                            inputType={"text"}
                                            name={"organisationName"}
                                            value={organisationName}
                                            onChange={(e) => setOrganisationName(e.target.value)}
                                        />
                                    )}
                                    {role === "hospital" && (
                                        <InputType
                                            labelText={"Hospital Name"}
                                            labelFor={"forHospitalName"}
                                            inputType={"text"}
                                            name={"hospitalName"}
                                            value={hospitalName}
                                            onChange={(e) => setHospitalName(e.target.value)}
                                        />
                                    )}

                                    {/* Additional input fields for register */}
                                    <InputType
                                        labelText={"Email"}
                                        labelFor={"forEmail"}
                                        inputType={"email"}
                                        name={"email"}
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    <InputType
                                        labelText={"Password"}
                                        labelFor={"forPassword"}
                                        inputType={"password"}
                                        name={"password"}
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    <InputType
                                        labelText={"Website"}
                                        labelFor={"forWebsite"}
                                        inputType={"text"}
                                        name={"website"}
                                        value={website}
                                        onChange={(e) => setWebsite(e.target.value)}
                                    />
                                    <InputType
                                        labelText={"Address"}
                                        labelFor={"forAddress"}
                                        inputType={"text"}
                                        name={"address"}
                                        value={address}
                                        onChange={(e) => setAddress(e.target.value)}
                                    />
                                    <InputType
                                        labelText={"Phone Number"}
                                        labelFor={"forphone"}
                                        inputType={"text"}
                                        name={"phone"}
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                    />
            
                                   
                                        {/* <img src={avatarPreview} alt="Avatar Preview" /> */}
                                        <InputType
                                            labelText={"Avatar"}
                                            labelFor={"forAvatar"}
                                            type="file"
                                            name="avatar"
                                            accept="image/*"
                                            onChange={(e) => {
                                                const reader = new FileReader();
                                                reader.onload = () => {
                                                    if (reader.readyState === 2) {
                                                        setAvatarPreview(reader.result);
                                                        setAvatar(reader.result);
                                                    }
                                                };
                                                reader.readAsDataURL(e.target.files[0]);
                                            }}
                                        />
    
                                </>
                            );
                        }
                    }
                })()}

                <div className="d-flex flex-row justify-content-between">
                    {/* ... (login/register switch link) */}
                    <button className="btn btn-primary" type="submit">
                        {submitBtn}
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Form;

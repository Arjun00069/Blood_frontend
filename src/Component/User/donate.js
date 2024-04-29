import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import data from "../../assets/data.json";
import "./donate.css"
import axios from "axios";
// import BanksSearch from "./BanksSearch";
// import AuthContext from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const UserForm = ({handle}) => {
    // const { handle } = useParams();
    // const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [units, setUnits] = useState(0);
    const [desc, setDesc] = useState("");
    const [bank, setBank] = useState("");
    const [blood, setBlood] = useState(0);
    const [state, setState] = useState(0);
    const [age, setAge] = useState(0);
    const [gender, setGender] = useState("male");
    const [district, setDistrict] = useState(0);
    const [me, setMe] = useState(false);
    const bloodGroups = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];
    // useEffect(() => {
    //     if (handle == "donate") {
    //         setMe(true);
    //     }
    // }, []);
    // useEffect(() => {
    //     setName(me ? user.name : "");
    //     setBlood(me ? bloodGroups.indexOf(user.bloodGroup) : 0);
    //     setAge(me ? user.age : 0)
    //     setGender(me ? user.gender : "male")
    // }, [me]);

    const donate = () => {
        const formData = {
            bankId: bank,
            units: units,
            disease: desc
        };
        // axios.post("/user/donate", formData, { withCredentials: true }).then((r) => {
        //     alert("Donation request sent successfully");
        //     navigate("/user/donations");
        // }).catch((e) => {
        //     alert("Something went wrong");
        // });
    };

    const request = () => {
        const formData = {
            bankId: bank,
            name: name,
            bloodGroup: bloodGroups[blood],
            age: age,
            gender: gender,
            units: units,
            reason: desc
        };
        // axios.post("/user/request", formData, { withCredentials: true }).then((r) => {
        //     alert("Blood request sent successfully");
        //     navigate("/user/requests");
        // }).catch((e) => {
        //     alert("Something went wrong");
        // });
    };

    return (
        <div className="form-container">
            <h2 className="cl">Blood is Precious❤️‍🩹</h2>
        <form
            className="form-content"
            action=""
            onSubmit={(e) => { e.preventDefault(); if (bank === "") { alert("Select a blood bank"); return; } handle === "donate" ? donate() : request(); }}
        >
            <fieldset className="form-fieldset">
                <legend className="form-legend">
                    &nbsp;{handle === "donate" ? "Donate Blood" : "Make Blood Request"} &nbsp;
                </legend>
                {handle === "request" && <legend className="form-legend-right">
                    <input type="checkbox" id="me" value={me} onChange={(e) => setMe(!me)} />
                    <label htmlFor="me"> For me</label><br />
                </legend>
                }
                <table className="form-table" cellPadding={10}>
                    <tr>
                        <td>
                            <label className="form-label">{handle === "request" && "Patient "}Name:<font className="form-label-required">*</font></label>
                            <input
                                className="form-input"
                                type="text"
                                placeholder="Enter your full name"
                                required
                                value={name}
                                disabled={me || handle === "donate"}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </td>
                        <td>
                            <label className="form-label" htmlFor="blood">Blood Group:<font className="form-label-required">*</font></label>
                            <select name="blood"
                                onChange={(e) => setBlood(e.target.value)}
                                disabled={me || handle === "donate"}
                                className="form-input">
                                {
                                    bloodGroups.map((e, i) => <option value={i} selected={blood === i}>{e}</option>)
                                }
                            </select>
                        </td>
                    </tr>
                    <tr>
                        {handle === "request" && (
                            <>
                                <td>
                                    <label className="form-label">Age:<font className="form-label-required">*</font></label>
                                    <input
                                        className="form-input"
                                        type="number"
                                        placeholder="Enter your age"
                                        required
                                        value={age}
                                        min={1}
                                        disabled={me}
                                        onChange={(e) => setAge(e.target.value)}
                                    />
                                </td>
                                <td>
                                    <label className="form-label" htmlFor="gender">Gender:<font className="form-label-required">*</font></label>
                                    <select name="gender" id="gender" disabled={me} onChange={(e) => setGender(e.target.value)} className="form-input">
                                        <option value="male" selected={gender === "male"}>Male</option>
                                        <option value="female" selected={gender === "female"}>Female</option>
                                    </select>
                                </td>
                            </>
                        )}
                    </tr>
                    <tr>
                        <td>
                            <label className="form-label">Units (in mL):<font className="form-label-required">*</font></label>
                            <input
                                className="form-input"
                                type="number"
                                min={1}
                                max={350}
                                required
                                value={units}
                                onChange={(e) => setUnits(e.target.value)}
                            />
                        </td>
                        <td colSpan={2}>
                            <label className="form-label" htmlFor="desc">{handle === "donate" ? "Disease (if any):" : "Reason:"}</label>
                            <input
                                className="form-input"
                                name="desc"
                                type="text"
                                onChange={(e) => setDesc(e.target.value.trim())}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label className="form-label" htmlFor="state">State:<font className="form-label-required">*</font></label>
                            <select name="state" id="state" onChange={(e) => { setState(e.target.value); setDistrict(0); }} className="form-input">
                                {
                                    data.states.map((e, i) => <option value={i} selected={state === i}>{e.state}</option>)
                                }
                            </select>
                        </td>
                        <td>
                            <label className="form-label" htmlFor="district">District:<font className="form-label-required">*</font></label>
                            <select name="district" id="district" onChange={(e) => { setDistrict(e.target.value); }} className="form-input">
                                {
                                    data.states[state].districts.map((e, i) => <option value={i} selected={district === i}>{e}</option>)
                                }
                            </select>
                        </td>
                    </tr>
                </table>
                {/* <BanksSearch state={data.states[state].state} district={data.states[state].districts[district]} setBank={setBank} /> */}
                <button
                    type="submit"
                    className="form-button"
                >
                    Submit
                </button>
            </fieldset>
        </form>
    </div>
    )
}

export default UserForm
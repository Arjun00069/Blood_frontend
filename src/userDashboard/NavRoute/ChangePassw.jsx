import React, { Fragment } from "react";
import "./ChangePassw.css";
// import Loader from "../layout/loader/Loader";
// import { useDispatch, useSelector } from "react-redux";
// import {updatePassword } from "../../actions/userAction.js";
// import { UPDATE_PASSWORD_RESET } from "../../Constant/userConstant.js";
// import MetaData from "../layout/MetaData";
// import LockOpenIcon from "@material-ui/icons/LockOpen";
// import LockIcon from "@material-ui/icons/Lock";
// import VpnKeyIcon from "@material-ui/icons/VpnKey";
// import {useNavigate} from "react-router-dom"

const ChangePassw = () => {

    // const history=useNavigate();
    // const dispatch = useDispatch();


    // const { error, isUpdated, loading } = useSelector((state) => state.profile);
 

    // const [oldPassword, setOldPassword] = useState("");
    // const [newPassword, setNewPassword] = useState("");
    // const [confirmPassword, setConfirmPassword] = useState("");

    // const updatePasswordSubmit=(e)=>{
    //     e.preventDefault();
    
    //     // making data from form
    //     const myForm = {
    //       oldPassword: oldPassword,
    //       newPassword: newPassword,
    //       confirmPassword: confirmPassword
    //     }
        
    //     dispatch(updatePassword(myForm));
    //   }

    //   useEffect(() => {
    //     if (error) {
    //       alert(error);
          
    //     }
    
    //     if (isUpdated) {
    //       alert("Password Updated Successfully");
    
    //       history("/account");
    
    //       dispatch({
    //         type: UPDATE_PASSWORD_RESET,
    //       });
    //     }
    //   }, [dispatch, error, history, isUpdated]);

  return (
    <div>
        <Fragment>
              <br /><br />
              <div className="updatePasswordContainer">
                <div className="updatePasswordBox"><br />
                  <h2 className="updatePasswordHeading">Update Password</h2>
    
                  <form
                    className="updatePasswordForm"
                    // onSubmit={updatePasswordSubmit}
                  >
                    <div className="loginPassword">
                      {/* <VpnKeyIcon /> */}
                      <input
                        type="password"
                        placeholder="Old Password"
                        required
                        // value={oldPassword}
                        // onChange={(e) => setOldPassword(e.target.value)}
                      />
                    </div>
    
                    <div className="loginPassword">
                      {/* <LockOpenIcon /> */}
                      <input
                        type="password"
                        placeholder="New Password"
                        required
                        // value={newPassword}
                        // onChange={(e) => setNewPassword(e.target.value)}
                      />
                    </div>
                    <div className="loginPassword">
                      {/* <LockIcon /> */}
                      <input
                        type="password"
                        placeholder="Confirm Password"
                        required
                        // value={confirmPassword}
                        // onChange={(e) => setConfirmPassword(e.target.value)}
                      />
                    </div>
                    <input
                      type="submit"
                      value="Change"
                      className="updatePasswordBtn"
                    />
                  </form>
                </div>
              </div>
            </Fragment>
    </div>
  );
}

export default ChangePassw;

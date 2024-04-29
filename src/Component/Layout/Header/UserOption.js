import React, { useState } from 'react'
import "./Header.css";
import { Fragment } from 'react';
import {SpeedDial,SpeedDialAction} from "@material-ui/lab";
import {useNavigate} from "react-router-dom"
import Backdrop from "@material-ui/core/Backdrop";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PersonIcon from "@material-ui/icons/Person";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import ListAltIcon from "@material-ui/icons/ListAlt";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useDispatch, useSelector } from "react-redux";
import {logout} from "../../../actions/userAction"

const UserOption = ({user}) => {

    const dispatch = useDispatch();
    const history=useNavigate();

const [open,setOpen]=useState(false);
// const { cartItems } = useSelector((state) => state.cart);


const options = [
  // { icon: <ListAltIcon />, name: "Orders", func: requests },
  { icon: <PersonIcon />, name: "Profile", func: account },
  
    // icon: (
    //   <ShoppingCartIcon
    //     // style={{ color: cartItems.length > 0 ? "tomato" : "unset" }}
    //   />
    // ),
    // // name: `Cart(${cartItems.length})`,
    // func: donation,
  
  { icon: <ExitToAppIcon />, name: "Logout", func:logoutUser},
];


  // only admin can access Dashboard
  // console.log(user);
  if(user.role==="admin"){
    options.unshift({
        icon: <DashboardIcon />,
        name: "Dashboard",
        func: dashboard,
      });
  }

  function dashboard(){
    history("/admin");
  }

  function requests(){
    history("/requests");
  }
  function account(){
    history("/account");
  }

  function logoutUser(){
    dispatch(logout());
    alert("logout successfully");
    history("/");
  }

  function donation() {
    history("/donation");
  }

  return (
    <Fragment>
      {/* using backdrop only speedicon icon apper bright everything become unde icon */}
    <Backdrop open={open} style={{ zIndex: "10" }} />
    <SpeedDial
        ariaLabel="SpeedDial tooltip example"
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        style={{ zIndex: "11" }}// profile will go from header
        open={open}
        direction="down"
        className="speedDial"
        icon={
          <img
            className="speedDialIcon"
            src={user.avatar.url ? user.avatar.url : "/Profile.png"}
            alt="Profile"
          />
        }
      >
       
       {options.map((item) => (
          <SpeedDialAction
            key={item.name}
            icon={item.icon}
            tooltipTitle={item.name}
            onClick={item.func}
            tooltipOpen={window.innerWidth <= 600 ? true : false}
          />
        ))}
      </SpeedDial>
    </Fragment>
  )
}

export default UserOption

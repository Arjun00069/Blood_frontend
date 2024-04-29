import React from 'react'
import "./Header.css"


import {ReactNavbar} from "overlay-navbar"

// import {LiaAmbulanceSolid} from "react-icons/lu"

import logo from "../../../images/p.png";
import Logo from './Logo'


import {FaUserAlt} from "react-icons/fa"
import { TbH1 } from 'react-icons/tb'





const Header = () => {
 return <ReactNavbar
 burgerColorHover= "#eb4034"
 logo={logo}
 navColor1= "lightpink"
 logoHoverSize= "10px"
 logoHoverColor= "#eb4034"
 link1Text= "Home"
 link2Text= "Connect"
 link3Text= "Hospital"
 link4Text= "Contact"
 link5Text= "About"
 link1Url= "/"
 link2Url= "/login"
 link3Url= "/hospitallogin"
 link4Url= "/contact"
 link5Url= "/about"
 link1Size= "2vmax"
 link1Color= "rgba(35, 35, 35,0.8)"
 nav1justifyContent= "flex-end"
 nav2justifyContent= "flex-end"
 nav3justifyContent= "flex-start"
 nav4justifyContent= "flex-start"
 link1ColorHover= "#eb4034"
 link1Margin= "2vmax"
 profileIcon={true}
 ProfileIconElement={FaUserAlt}
 profileIconUrl= "/account"
 profileIconColor= "rgba(35, 35, 35,0.8)"
 
 profileIconColorHover= "#eb4034"
 
 cartIconMargin= "1vmax"

 />
 
}

export default Header

import React ,{useState}from 'react'
import './sidebar.css'
import Logo from "../image/logo .png"
import { useSelector } from 'react-redux';
import {UilEstate,UilSignOutAlt} from '@iconscout/react-unicons'
import UserOption from '../../Component/Layout/Header/UserOption';
import {arr} from "./Data/Data.js"
const Sidebar = (props) => {


  const {user,isAuthenticated}=useSelector(state=>state.user);
   const [selected ,setSelected]=useState(0);
   const clicker=(index)=>{
    setSelected(index)
    console.log(index);
       if(index===0) props.dash()
       else if(index===1) props.hospital()
       else if(index===2) props.status()
       else if(index ===3) props.trends()
   }
  return (
  <div className="sidebar">
       
       {isAuthenticated && <UserOption user={user}/>}
    <div className="logo">
    
<img src={Logo} alt="" />
<span>
Hos<span>p</span>ital
</span>
    </div>
    <div className="menu">
       {arr.map((item,index)=>{
        return(
            <div className= {selected===index ?"menuitems activate":"menuitems"}
            key={index}
            onClick={()=>{
               clicker(index)
              }
}
            >
              <item.icons/>
            <span>{item.hedding}</span>
        </div>
        )
       })}
        <div className="menuitems ">
        </div>
    </div>

  </div>
  )
}

export default Sidebar
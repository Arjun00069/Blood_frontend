import React, {useEffect} from 'react'
import 
{BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill}
 from 'react-icons/bs'
 import icon from "../../assets/hospital.png"
 import './sidebar.css'
 import { useNavigate} from "react-router-dom"
 import { useSelector , useDispatch } from 'react-redux'
import { logoutHospital } from '../../actions/hospitalAction'

function Sidebar({openSidebarToggle, OpenSidebar,Openhome,Openblood,Opendonor,Openreciver}) {
    const history= useNavigate()
const dispatch =useDispatch()
const {error,isAuthenticated,loading} =useSelector((state)=>state.hospital)
useEffect(()=>{
    console.log(isAuthenticated)
    if(error){
      alert(error);
      dispatch({
        type: "clearError",
      });
    }
    if(!isAuthenticated&&loading===false){
      history("/hospitallogin")
    }
  },[dispatch,error,history,isAuthenticated])
  
const logoutHandler =()=>{
    try {
        dispatch(logoutHospital())
        history("/hospitallogin")
    } catch (error) {
          alert(error.message)
          dispatch({
            type:"clearError"
          })
          console.log("Not logged out",error.message)
    }

}


  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
                <img src={icon} alt="" style={{width:"54px",height:"54px",marginBottom:"-18px"}} />    HOSPITAL
              
            </div>
            {/* <span className='icon close_icon' onClick={OpenSidebar}>X</span> */}
        </div>

        <ul className='sidebar-list'>
            <li className='sidebar-list-item' onClick={Openhome}>
                <a href="#">
                    <BsGrid1X2Fill className='icon' style={{position:"unset"}}/> Dashboard
                </a>
            </li>
            <li className='sidebar-list-item' onClick={Openblood}>
                <a href="#">
                    <BsFillArchiveFill className='icon' style={{position:"unset"}}/> Blood
                </a>
            </li>
            <li className='sidebar-list-item' onClick={Opendonor}>
                <a href="#">
                    <BsFillGrid3X3GapFill className='icon'  style={{position:"unset"}}/> Donor
                </a>
            </li>
            <li className='sidebar-list-item' onClick={Openreciver}>
                <a href="#">
                    <BsPeopleFill className='icon' style={{position:"unset"}}/> Reciever
                </a>
            </li>
            <li className='sidebar-list-item' onClick={logoutHandler}>
                <a href="#">
                    <BsListCheck className='icon' style={{position:"unset"}}/> Logout
                </a>
            </li>
            
            
        </ul>
    </aside>
  )
}

export default Sidebar
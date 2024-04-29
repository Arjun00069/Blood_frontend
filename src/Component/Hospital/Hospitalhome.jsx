import React , {useState,useEffect}from 'react'
import './hospitalhome.css'
import Header from './Header'
import Sidebar from './Sidebar'
import Dashboard from './Dashboard'
import Hospitalblood from './Hospitalblood'
import Donor from './Donor'
import Reciver from './Reciver'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Hospitalhome = () => {

// const dispatch = useDispatch()
const {isAuthenticated} =useSelector((state)=>state.hospital)
console.log(isAuthenticated);
const history = useNavigate()
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)
   const [dashboard,setDashboard] =useState(true);
   const [blood,setBlood] =useState(false);
   const [donor,setDonor] =useState(false);
   const [reciver,setReciver] =useState(false);
  
useEffect(()=>{
  if(!isAuthenticated){
    history('/hospitallogin')
  }
},[isAuthenticated])
  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }
 const Openhome =()=>{
  setDashboard(true);
  setBlood(false)
  setDonor(false);
  setReciver(false)
 }
 const Openblood =()=>{
  setBlood(true);
  setDashboard(false)
  setReciver(false)
  setDonor(false);

 }
 const Opendonor =()=>{
  setDonor(true);
  setBlood(false);
  setDashboard(false)
  setReciver(false)
 }
 const Openreciver =()=>{
  setReciver(true)
  setDonor(false);
  setBlood(false);
  setDashboard(false)

 }
  return (
    <div className='grid-container'>
   <Header OpenSidebar={OpenSidebar}/>
   <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} Openhome={Openhome}
   Openblood={Openblood} Opendonor={Opendonor} Openreciver={Openreciver}
   />
     {dashboard&&<Dashboard/>
     }   
       {blood&&<Hospitalblood/>} 
      {donor&& <Donor/>}
     {reciver&&<Reciver/>} 
    </div>
  )
}

export default Hospitalhome

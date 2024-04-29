
import './App.css';
import Sidebar from "./compenents/Sidebar"
import MainDash from  './compenents/maindash/MainDash'
import RightSide from './compenents/rightside/RightSide';
import Hospitals from './compenents/Hospitals/Hospitals';
import Trends from './compenents/trends/Trends';
import Status from './compenents/status/Status';
import {useState} from "react"

function Admin() {
  const [maindash,setMaindash] =useState(true)
  const [hospital,setHospital] =useState(false)
  const [trends,setTrends] =useState(false)
  const [status,setStatus] =useState(false)
  const renderdash=()=>{
    console.log('dash');
    setMaindash(true)
    setHospital(false)
    setTrends(false)
    setStatus(false)
  }
  const renderhospital=()=>{
    console.log('hosp');
    setMaindash(false)
    setHospital(true)
    setTrends(false)
    setStatus(false)
  }
  const renderstatus=()=>{
    console.log('stat');
    setMaindash(false)
    setHospital(false)
    setTrends(false)
    setStatus(true)
  }
  const rendertrends=()=>{
    console.log('tremds');
    setMaindash(false)
    setHospital(false)
    setTrends(true)
    setStatus(false)
  }


  return (
    <div className="Admin">
       <div className="AppGlass">
       <Sidebar dash={renderdash }
       hospital={renderhospital }
       status={renderstatus }
       trends={rendertrends }
        />
     {maindash&& <MainDash/>}
    { hospital&& <Hospitals/>}
    { trends&& <Trends/>}
     {status&& <Status/>}
       <RightSide/>
       </div>
    </div>
  );
}

export default Admin;

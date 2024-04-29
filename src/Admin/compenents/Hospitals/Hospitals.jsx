import React from 'react'
import Table from "../table/Table"
import ing1 from "../../image/hospimg.jpg"
import './Hospital.css'
const Hospitals = () => {
  return (
    
    <div className="hospital">
        <div className='header'> 
        <img src={ing1} alt="" />
        <h1>Blood<span style={{fontSize:"43px", color:"#EE9CA7"}}>Connect</span></h1>
        </div>
       
        <div className="Table">
      <Table title={"Hospitals list"}/>
    </div>
    </div>
  )
}

export default Hospitals
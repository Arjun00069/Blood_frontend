import React, { useEffect } from 'react'
import { CircularProgressbar } from 'react-circular-progressbar';
import {BsHospital} from "react-icons/bs"
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import './status.css'
import { idID } from '@mui/material/locale';
import { useState } from 'react';
import { useSelector } from 'react-redux';
function CompactCard(param){
    const Png = param.png;
   

    return(
    
        <div className="compactCard"
        style={{
            background:param.color.backGround,
            boxShadow:param.color.boxShadow
        }}
        
        initial={{ width:0}}
        animate={{  width:'auto'}}
        exit={{ width:'auto' }}
        transition={{ duration: 0.3 }}
   
        >
            <div className="radialBar">
                <CircularProgressbar 
                value={param.barValue} 
                text={`${param.barValue}`}
                />
                <span>{param.title}</span>
            </div>
            <div className="details">
                <Png/>
               
            </div>
       
        </div>
    )
}
const Status = () => {
    const {hospitals} =useSelector(state=>state.hospitals)
    const [pen,setPen]=useState(0);
    const[con,setCon]=useState(0);
    useEffect(()=>{
     if(hospitals){
        let c=0;
        let p=0;
      for(const i in hospitals){
        if(hospitals[i].hospitalStatus==="Confirmed"){
          c++;
        }else{
p++;
        }
      }
      setPen(p);
      setCon(c);
     }
    },[hospitals])
    const rows = [
        { id: 1, col1: 1, col2: 'Red Cross' ,col3:Date.now(),col4:1200,col5:800002},
        { id: 2, col1: 2 ,col2: 'Kaveri' ,col3:Date.now(),col4:1200,col5:800002},
        { id: 3, col1: 3, col2: 'Fort' ,col3:Date.now(),col4:1200,col5:800002},
      ];
      
      const columns= [
        { field: 'col1', headerName: 'Hospital Id', width: 150 },
        { field: 'col2', headerName: 'Hospital Name', width: 150 },
        { field: 'col3', headerName: 'Date of Signup', width: 150 },
        { field: 'col5', headerName: 'Pincode', width: 150 },
        { field: 'col4', headerName: 'No of patient', width: 150 },
   



      ];
      
    const card={ title:'Hospitals status Pending',
    colors:{
        backGround: "linear-gradient(#EA8D8D 0%, #A890FE 100%)",
        boxShadow:"0px 10px 20px 0px #e0c6f5",},
        barValue:70,
        value:"25,970",
        png:BsHospital,
        series:[
            {
                name:'Hospital',
                data:[31,40,28,51,42,109,100]
            }
        ]}
        const card2={ title:'Hospitals status Confirmed',
    colors:{
        backGround: "linear-gradient( #D8B5FF, #1EAE98 100%)",
        boxShadow:"0px 10px 20px 0px #e0c6f5",},
        barValue:70,
        value:"25,970",
        png:BsHospital,
        series:[
            {
                name:'Hospital',
                data:[31,40,28,51,42,109,100]
            }
        ]}
  return (
    <div className="status">
          <h1> <span style={{fontSize:"47px",position:"relative",top:"6px",color:"pink"}}>S</span>tatus</h1>
        <div className="hedder">
   
        <CompactCard
        title={card.title}
        color={card.colors}
        value={card.value}
        barValue={pen}
        png={card.png}
        series={card.series}
        />
        <CompactCard
        title={card2.title}
        color={card2.colors}
        value={1}
        barValue={con}
        png={card2.png}
        series={card2.series}
        />
        </div>
        <div className="hospusers" >
        <DataGrid rows={rows} columns={columns} />
        </div>
    
    </div>
  )
}

export default Status
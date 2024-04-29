import React from 'react'
import { useState } from 'react'
import {LayoutGroup ,motion,AnimatePresence} from "framer-motion"
import { CircularProgressbar } from 'react-circular-progressbar';
import {UilTimes} from '@iconscout/react-unicons'
import Chart from "react-apexcharts";
import 'react-circular-progressbar/dist/styles.css';
import'./Card.css'
const Card = (props) => {
    const [expanded,setExpanded]= useState(false)
 
  return (
    <AnimatePresence>
{
   
    <CompactCard param={props} setExpanded={()=>setExpanded(true)} />
}

    </AnimatePresence>
    // <div><CompactCard param={props} setExpanded={()=>setExpanded(true)} /></div>
  )
}
//
function CompactCard({param,setExpanded}){
    const Png = param.png;
 
    return(
    
        <motion.div className="compactCard"
        style={{
            background:param.color.backGround,
            boxShadow:param.color.boxShadow
        }}
        onClick={setExpanded}
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
       
        </motion.div>
    )
}
function ExpandedCard({param,setExpanded}){
    const data = {
        options: {
          chart: {
            type: "area",
            height: "auto",
          },
    
          dropShadow: {
            enabled: false,
            enabledOnSeries: undefined,
            top: 0,
            left: 0,
            blur: 3,
            color: "#000",
            opacity: 0.35,
          },
    
          fill: {
            colors: ["#fff"],
            type: "gradient",
          },
          dataLabels: {
            enabled: false,
          },
          stroke: {
            curve: "smooth",
            colors: ["white"],
          },
          tooltip: {
            x: {
              format: "dd/MM/yy HH:mm",
            },
          },
          grid: {
            show: true,
          },
          xaxis: {
            type: "datetime",
            categories: [
              "2018-09-19T00:00:00.000Z",
              "2018-09-19T01:30:00.000Z",
              "2018-09-19T02:30:00.000Z",
              "2018-09-19T03:30:00.000Z",
              "2018-09-19T04:30:00.000Z",
              "2018-09-19T05:30:00.000Z",
              "2018-09-19T06:30:00.000Z",
            ],
          },
        },
      };
    return(
        <motion.div className="ExpandedCard"
        
        >
         <div             style={{alignSelf:'flex-end',cursor:'pointer',color:'white'}}>
            <UilTimes onClick={setExpanded}
/>
         </div>
         <span>{param.title}</span>
         {/* <div className="chartContainer">
            <Chart series = {param.series} type='area' />
         </div> */}
         <span>Last 24 Hours</span>
        </motion.div>
    )
}

export default Card
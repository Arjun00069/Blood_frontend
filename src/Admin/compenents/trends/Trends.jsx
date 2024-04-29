import React from 'react'
import './trends.css'

import {BsHospital} from "react-icons/bs"
import { cardsData } from '../Data/Data'
import Chart from "react-apexcharts";


function ExpandedCard(param){
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
        <div className="ExpandedCard"
        style={{
            background:param.color.backGround,
            boxShadow:param.color.boxShadow
        }}
        initial={{ width:0}}
        animate={{  width:'60%'}}
        exit={{ width:0 }}
        transition={{ duration: 0.3 }}
        >
         <div             style={{alignSelf:'flex-end',cursor:'pointer',color:'white'}}>
           

         </div>
         <span>{param.title}</span>
         <div className="chartContainer">
            <Chart series = {param.series} type='area' options={data.options}/>
         </div>
         <span>Last 24 Hours</span>
        </div>
    )
}



const Trends = () => {
   const card={ title:'Hospitals',
    colors:{
        backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
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
    <div className="trnds">
   <div className="hedder">
    <h1>Trends
    </h1>
   </div>
    <div className="expanded">
    <ExpandedCard title={card.title}
        color={card.colors}
        value={card.value}
        barValue={card.barValue}
        png={card.png}
        series={card.series}/>
        </div>
    </div>
  )
}

export default Trends
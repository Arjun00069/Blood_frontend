import React, { useEffect, useState } from 'react'
import Card from '../../card/Card'
import {Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend,ArcElement} from 'chart.js';
import { Bar ,Doughnut} from 'react-chartjs-2';
import { BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill}
 from 'react-icons/bs'
 import "./dashboard.css"
 import { faker } from '@faker-js/faker';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
 ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const barColors = [
  'rgba(255, 99, 132, 0.5)',
  'rgba(54, 162, 235, 0.5)',
  'rgba(255, 206, 86, 0.5)',
  'rgba(75, 192, 192, 0.5)',
  'rgba(153, 102, 255, 0.5)',
  'rgba(255, 159, 64, 0.5)',
  'rgba(0, 128, 0, 0.5)',
  'rgba(128, 0, 0, 0.5)',
];
export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' ,
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
};


 const donutdata = {
  labels: ['Donor','Reciver','Pending Request'],
  datasets: [
    {
      label: '# of Votes',
      data: [12,34,20],
      backgroundColor: [
        "rgba(159,63,176,0.1)",
        "rgba(78,63,176,0.2)",
        "rgba(156,0,60,0.3)",
       
      ],
      borderColor: [
        "rgb(159,63,176)", "rgb(78,63,176)", "rgb(156,0,60)"
        
      ],
      borderWidth: 1,
    },
  ],
};



const Dashboard = () => {
  const history = useNavigate()
  const {isAuthenticated} =useSelector((state)=>state.hospital);
  useEffect(()=>{
    if(!isAuthenticated){
      history('/hospitallogin')
    }
  },[isAuthenticated])
  const {hosp}=useSelector(state=>state.hospital)

  let dat= hosp?.hospital?.blood && Object.keys(hosp.hospital.blood).map(key => hosp.hospital.blood[key]);
   
  const labels =['A+','A-','B+','B-','AB+','AB-','O+','O-'];
 const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: dat,
        backgroundColor: barColors,
        
      }
     
    ],
  };

  return (
   <>
   <div className="mainContainer">
   <div className="cardcontainer">
   <Card className="card" name={"Blood unit"} icon={<BsFillArchiveFill className='card_icon'/> }   delay={"0.3s"}/>
   <Card className="card" name={"Donor"} icon={<BsFillArchiveFill className='card_icon'/> }   delay={"0.9s"}/>
   <Card className="card" name={"Receiver"} icon={<BsFillArchiveFill className='card_icon'/> }   delay={"0.5s"}/>
   <Card className="card" name={"Blood Donated"} icon={<BsFillArchiveFill className='card_icon'/> }   delay={"0.7s"}/>
   </div>
   <div className="graphContainer">
     <div className="bargraph">
     <Bar options={options} data={data} />
     </div>
     <div className="donutgraph" style={{ "width":"300px" , "height": '300px' }}>
     <Doughnut data={donutdata}  />
     </div>
   </div>

   </div>
   
   </>
  )
}

export default Dashboard

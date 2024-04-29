import React ,{ useEffect}from 'react'
import {Chart as ChartJS, CategoryScale, LinearScale, LineElement, Title, Tooltip, Legend,PointElement} from 'chart.js';

import { DataGrid } from '@mui/x-data-grid';
import './donor.scss'

import { useState } from 'react';
import { faker } from '@faker-js/faker';

import {FcApprove} from "react-icons/fc"
import { useSelector } from 'react-redux';
import axios from 'axios';
import { server } from '../../store';
import { MdOutlinePendingActions } from "react-icons/md";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' ,
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
};
const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data:[1,2,3,4,5,6,7],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};
  const rows = [
    { id: 1, string: 'John Doe', Age: 30, "Contact Number": '123-456-7890', 'bloodgroup':'A+', Quantity: 20, 'Donation Year': 2022,'Status':'comp' },
    { id: 2, string: 'Jane Smith', Age: 25, "Contact Number": '987-654-3210', 'bloodgroup': 'B+', Quantity: 15, 'Donation Year': 2021,'Status':'comp'  },
    { id: 3, string: 'Bob Johnson', Age: 35, "Contact Number": '555-555-5555', 'bloodgroup': 'O-', Quantity: 10, 'Donation Year': 2022 ,'Status':'comp' },
    { id: 4, string: 'Alice Brown', Age: 28, "Contact Number": '111-222-3333', 'bloodgroup': 'AB+', Quantity: 30, 'Donation Year': 2023 ,'Status':'comp' },
  ];
  

export const donutdata = {
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
 

const Donor = () => {
  const [donor,setDonor] =useState([])
  const [fetch,setFetch] =useState(false);
  const fetchDonor = async()=>{
    try {
      const {data} = await axios.get(`${server}/hospital/getdonor`,{
        withCredentials:true
      })
      console.log(data.donor);
      setDonor(data.donor)
    } catch (error) {
      console.log(error);
    }
   }

   const toggleStatus = async (id,status)=>{
    console.log('togglecstat');
    if(status==="Donated") return;
    try {

     const {data}= await  axios.get(`${server}/hospital/togglestatus/${id}`,{
        withCredentials:true
      })
      // console.log(data);
      setFetch(!fetch)
    } catch (error) {
    console.log(error)
    }
   }

  const {hosp:{hospital:{donation}}}=useSelector(state=>state.hospital)
          // console.log(donation);
  useEffect(()=>{
fetchDonor()
  },[fetch])

          const rows = [
            { id: 1, uid:1,string: 'John Doe', Age: 30, "Contact Number": '123-456-7890', 'bloodgroup':'A+', Quantity: 20, 'Donation Year': 2022,'Status':"Donated" },
            { id: 2, uid:1,string: 'Jane Smith', Age: 25, "Contact Number": '987-654-3210', 'bloodgroup': 'B+', Quantity: 15, 'Donation Year': 2021,'Status':"Donated" },
            { id: 3, uid:1,string: 'Bob Johnson', Age: 35, "Contact Number": '555-555-5555', 'bloodgroup': 'O-', Quantity: 10, 'Donation Year': 2022 ,'Status':"Donated" },
            { id: 4, uid:1,string: 'Alice Brown', Age: 28, "Contact Number": '111-222-3333', 'bloodgroup': 'AB+', Quantity: 30, 'Donation Year': 2023 ,'Status':"Donated" },
          ];
        let cnt=10;
        for(const i in donor){
          console.log(donor[i].donor._id)
             rows.push({
           id:cnt,
           uid:donor[i].donor._id,
           string:donor[i].donor.name,
           Age:donor[i].donor.age,
           "Contact Number":donor[i].donor.phone,
           bloodgroup:donor[i].donor.bloodgrp,
           Quantity:donor[i].quantity,
           'Donation Year':new Date().getFullYear(),
              'Status':donor[i].status,
             })
            cnt++;
        }

    const columns = [
        { field: 'id', headerName: 'ID' , width: 60, minWidth: 60, maxWidth: 60},
        { field: 'string', headerName: 'Name' },
        { field: 'Age', headerName: 'Age' ,width: 60, minWidth: 60, maxWidth: 60},
        { field: 'Contact Number', headerName: 'Contact Number' , width: 100, minWidth: 150, maxWidth: 150 },
        { field: 'bloodgroup', headerName: 'Blood Group' },
        { field: 'Quantity', headerName: 'Quantity', },
        { field: 'Donation Year', headerName: 'Donation Year' , width: 100, minWidth: 150, maxWidth: 150 },
        { field: 'Status',
        headerName: 'Status',
        renderCell: (params) => {
            const status = params.row.Status;
            console.log(status);
            return (
                <strong className='toggleStatus' onClick={()=>toggleStatus(params.row.uid,params.row.Status)}>
                    {status == 'Donated' ? <FcApprove/> : <MdOutlinePendingActions />}
                    {/* {params.row.Status} */}
                </strong>
            );
        },
        width: 100,
        minWidth: 150,
        maxWidth: 200
    
    },
      ];
      
    const [trends,setTrends] = useState(false);
  return (
  
    <div className="donor" >
   <h1 style={{color:"rgb(199, 101, 101,11111111)", fontFamily:"Raanana",marginLeft:"6%"}}>Donor Information</h1>
   <section className="tableClass"  style={{justifyContent:"space-around",height:"55vh"}}>
   <main>
    <div style={{ height: 'auto', width: '100%' }}>
      <DataGrid columns={columns} rows={rows} />
    </div>
   </main>

 </section>
 


 </div>


  )
}

export default Donor
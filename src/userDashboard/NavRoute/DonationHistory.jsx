import React, { useState } from 'react';
import './SearchBloodTab.css';
import './SearchBloodform.css';
import axios from 'axios';
import { useEffect } from 'react';
const DonationHistory = () => {
  const id= localStorage.getItem('userInfo');
  const [history,setHistory]  =useState([]);
  const fetchHIstory = async()=>
  {
    try {
      const {data} =await axios.get(`http://localhost:4000/blood/v1/user/history?id=${id}`)
      console.log(data);
      setHistory(data.history);
    } catch (error) {
      console.log(error)
    }

  }
  useEffect(()=>{
fetchHIstory();
  },[])
  return (
    <div><br />
      <h2>Your Donation</h2>
      <section className="tableClass"> 
      <main>
        <table className='maintable'>
            <thead>
            <tr>
              <th>Hospital Name</th> 
              <th>State</th>    
              <th>District </th>
              <th>Address</th>
              <th>Date</th>
            </tr>
            </thead>

            <tbody>
              {
                history.map((i)=>(
                    i.donation.map((p)=>(  <tr>
          
                    <td>{i.email}</td>
                    <td>{i.address.state}</td>
                    <td>{i.address.city}</td>
                    <td>{`${i.address.state},${i.address.city},${i.address.pincode},${i.address.country}`}</td>
                    <td>{p.donationDate.slice(0,10)}</td>
                </tr>))
                
                ))
              }
          
     
      <tr>
      <td>hosp@gmail.com</td>
          <td>Delhi</td>
          <td>Mayur vihar</td>
          <td>Dlehi Mayur vihar phase 3</td>
          <td>09-01-2024</td>
          
      </tr>
            </tbody>
          </table>
        </main>
      </section>
      
      <p style={{ position: 'absolute', bottom: 0, alignContent: 'end', paddingLeft : '25%', paddingBottom : "3px", background : "rgba(255, 207, 209, 0.8);"}}> <hr />We appreciate your donations, Mr.Life Saver! <hr /></p>
    </div>
  );
}

export default DonationHistory;

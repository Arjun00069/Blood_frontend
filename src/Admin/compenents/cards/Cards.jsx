import React from 'react'

import Card from '../card/Card'
import './Cards.css'
import { cardsData } from '../Data/Data'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useState } from 'react'
import {UilEstate} from '@iconscout/react-unicons'
import {BsHospital} from "react-icons/bs"
import {BiDonateBlood} from "react-icons/bi"
import {GrUserSettings} from "react-icons/gr"
import {FaArrowTrendUp} from "react-icons/fa6"

const Cards = () => {
  const {hospitals} =useSelector(state=>state.hospitals)
  const [value,setValue]=useState(0);
  const [don,setDonations]=useState(0);
  const [sav,setSav]=useState(0);


  console.log(value);
    useEffect(()=>{
      if(hospitals){setValue(hospitals.length) 
        let count =0;
        let saved =0
        for(const i in hospitals){
       count+=hospitals[i].donation.length;
          saved+=count;
          saved+=hospitals[i].receiving.length;
        }

        setDonations(count)
        setSav(saved)
        console.log(don)
      }
    },[hospitals])
  return (
    <div className="Cards">
         <div className="parentContainer">
            <Card
            title={"Hospitals"}
        color={{
          backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
          boxShadow:"0px 10px 20px 0px #FDC0C7",}}
        value={1}
        barValue={value}
        png={BiDonateBlood}
        series={[
          {
              name:'Donation',
              data:[10,100,50,70,80,30,40]
          }
      ]}
            />
            </div>
            <div className="parentContainer">
            <Card
            title={"Donations"}
        color={ {
          backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
          boxShadow:"0px 10px 20px 0px #e0c6f5",}}
        value={1}
        barValue={don}
        png={BiDonateBlood}
        series={[
          {
              name:'Donation',
              data:[10,100,50,70,80,30,40]
          }
      ]}
            />
            </div>
            <div className="parentContainer">
            <Card
            title={"Life Saved"}
        color={{
          backGround:  "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
          boxShadow:"0px 10px 20px 0px #FDC0C7"}}
        value={1}
        barValue={sav}
        png={BiDonateBlood}
        series={[
          {
              name:'Donation',
              data:[10,100,50,70,80,30,40]
          }
      ]}
            />
            </div>
    </div>
  )
}

export default Cards
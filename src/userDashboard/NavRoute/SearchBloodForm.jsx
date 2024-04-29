import React , {useState} from 'react'
import {State,City} from "country-state-city"
import {motion} from "framer-motion"
import './SearchBloodform.css';

import axios  from 'axios';
import { server } from '../../store';
import SearchBloodTab from './SearchBloodTab';
const SearchBloodForm = () => {

    const [stateCode,setStateCode] =useState("");
    const [displaytable,setDisplaytable]=useState(false);
    const [hospitals,setHospital] =useState([]);
   const tableHandler = async (event)=>{
    console.log('table handler called');
        event.preventDefault();
        if(displaytable===true){
            setDisplaytable(false);
            // setHospital([])
        }else{
         setDisplaytable(true)
        }
               try {
                   const {data}= await axios.post(`${server}/hospital/request/search`,{city:"Sample City",state:"Sample State"},{
                       withCredentials:true
                   })
                   console.log(data);
                   setHospital(data.hospitals);
               } catch (error) {
                   console.log(error)
               }

        
   }
 return (
  <>
  <section className='searchblood'>
   <main>
       <h1>Search Blood</h1>
       <form onSubmit={tableHandler}>
       <div>
           <label >State</label>
           <select onChange={e=>{
               setStateCode(e.target.value)
           }}>
               <option value="">State</option>
              {
               State && State.getStatesOfCountry("IN").map(i=>(
                   <option value={i.isoCode} key={i.isoCode} >{i.name}</option>
               ))
              }
           </select>
       </div>
       <div>
           <label >City</label>
           <select >
               <option value="">City</option>
              {
               City && City.getCitiesOfState("IN",stateCode).map(i=>(
                   <option value={i.stateCode} key={i.stateCode} >{i.name}</option>
               ))
              }
           </select>
       </div>
       <div>
           <label >Blood group</label>
           <select >
               <option value="A+">A+</option>
               <option value="A-">A-</option>
               <option value="B+">B+</option>
               <option value="B-">B-</option>
               <option value="O">O+</option>
               <option value="O-">O-</option>
               <option value="AB+">AB+</option>
               <option value="AB-">AB+</option>
              
           </select>
       </div>
       <motion.button 
 initial={{
   y: "-100vh",
   opacity: 0,
 }}
 animate={{
   y: 0,
   opacity: 1
 }}
 type='submit'
//  onClick={tableHandler}
>
        { displaytable===true?"Cancel":"Search"}
</motion.button>
       </form>
   </main>
  </section>
    
  {displaytable &&  <  SearchBloodTab hospitals={hospitals}/>}

  </>
 )
}

export default SearchBloodForm;

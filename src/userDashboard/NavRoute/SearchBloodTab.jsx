import React from 'react';
import './SearchBloodTab.css';
import { FcSearch} from 'react-icons/fc';
import { BiDonateHeart } from "react-icons/bi";
import { BiDonateBlood } from "react-icons/bi";
import './SearchBloodform.css';
import axios from 'axios';
import toast from"react-hot-toast"
import { data } from '../../Component/Hospital/Donor';

const SearchBloodTab = ({hospitals}) => {
   const id =localStorage.getItem("userInfo");
   const donationHandler = async (email)=>{
      try {
         const {data} = await axios.get(`http://localhost:4000/blood/v1/user/donation/request?email=${email}&id=${id}`)
         console.log(data);
         if(data.success===true){
           alert("Request Raised")
         }else{
          alert("Error while raising request")
         }
      } catch (error) {
         alert("Error in sending request")
         console.log(error)
      }
   }
   const requestHandler =async (email)=>{
      try {
         const {data} = await axios.get(`http://localhost:4000/blood/v1/user/receiving/request?email=${email}&id=${id}`)
         console.log(data);
         if(data.success===true){
           alert("Request Raised")
         }else{
          alert("Error while raising request")
         }
      } catch (error) {
         alert("Error in sending request")
         console.log(error)
      }
   }


   return (
     <section className="tableClass">
       <main>
         <table className='maintable'>
           <thead>
          
             <tr>
               <th>Email</th>
               <th>State</th>    
           <th> District </th>
           <th>Address</th>
           <th>Contact Number</th>
           <th>Request</th>
           <th>Donate</th>
             </tr>
           </thead>
 
           <tbody>
           {
           hospitals&&hospitals.map((hospital)=>(
             <tr>
             <td>{hospital.email}</td>
                 <td>{hospital.address.state}</td>
                 <td>{hospital.name}</td>
                 <td>{`${hospital.address.state },${hospital.address.city},${hospital.address.pincode}`}</td>
                 <td>{`${hospital.contactNumber}`}</td>
                 <td> 
                   <button type='submit' onClick={()=>requestHandler(hospital.email)} > <FcSearch/> </button>
                </td>
                <td> 
               <button type='submit' onClick={()=>donationHandler(hospital.email)} > <BiDonateBlood /> </button>
            </td>
             </tr>
           ))
         }
           <tr>
           
             <td>hosp@gmail.com</td>
             <td>Delhi</td>
             <td>Mayur vihar</td>
             <td>Dlehi Mayur vihar phase 3</td>
             <td>1232432134</td>
             <td> 
               <button type='submit' > <FcSearch/> </button>
            </td>
            <td> 
               <button type='submit' > <BiDonateBlood /> </button>
            </td>
           
            
            
         </tr>
         <tr>
         <td>hos1p@gmail.com</td>
             <td>Delhi</td>
             <td>Mayur vihar</td>
             <td>Dlehi Mayur vihar phase 3</td>
             <td>1233432144</td>
             <td> 
               <button type='submit' > <FcSearch/> </button>
            </td>
            <td> 
               <button type='submit' > <BiDonateBlood /></button>
            </td>
 
         </tr>
         <tr>
         <td>hosp@gmail.com</td>
             <td>Delhi</td>
             <td>Mayur vihar</td>
             <td>Dlehi Mayur vihar phase 3</td>
             <td>1232432984</td>
             <td> 
               <button type='submit' > <FcSearch/> </button>
            </td>
            <td> 
               <button type='submit' > <BiDonateBlood /></button>
            </td>
         </tr>
         <tr>
         <td>hosp@gmail.com</td>
             <td>Delhi</td>
             <td>Mayur vihar</td>
             <td>Dlehi Mayur vihar phase 3</td>
             <td>123243294</td>
             <td> 
               <button type='submit' > <FcSearch/> </button>
            </td>
            <td> 
               <button type='submit' > <BiDonateBlood /></button>
            </td>
         </tr>
         <tr>
         <td>hosp@gmail.com</td>
             <td>Delhi</td>
             <td>Mayur vihar</td>
             <td>Dlehi Mayur vihar phase 3</td>
             <td>123243294</td>
             <td> 
               <button type='submit' > <FcSearch/> </button>
            </td>
            <td> 
               <button type='submit' > <BiDonateBlood /> </button>
            </td>
         </tr>
         <tr>
         <td>hosp@gmail.com</td>
             <td>Delhi</td>
             <td>Mayur vihar</td>
             <td>Dlehi Mayur vihar phase 3</td>
             <td>123243294</td>
             <td> 
               <button type='submit' > <FcSearch/> </button>
            </td>
            <td> 
               <button type='submit' > <BiDonateBlood /> </button>
            </td>
         </tr>
         <tr>
         <td>hosp@gmail.com</td>
             <td>Delhi</td>
             <td>Mayur vihar</td>
             <td>Dlehi Mayur vihar phase 3</td>
             <td>123243294</td>
             <td> 
               <button type='submit' > <FcSearch/> </button>
            </td>
            <td> 
               <button type='submit' > <BiDonateBlood /> </button>
            </td>
         </tr>
        
        
           </tbody>
         </table>
       </main>
     </section>
   )
 }
export default SearchBloodTab;

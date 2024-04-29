import React,{state} from 'react';
import './hospitalblood.scss';
import { BiDonateBlood } from 'react-icons/bi';
import { FcPlus, FcMinus } from 'react-icons/fc';
import { motion ,useAnimation } from 'framer-motion';
import b1 from "../../assets/blood-test.png";
import b2 from "../../assets/blood-pressure.png"
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from "axios";
import { server } from '../../store';
import { data } from './Dashboard';

const iconAnimationBlood = {
  initial: { y: 0 }, // Starting position
  animate: {
    y: [0, -5, 0, 5, 0], // Define the oscillation pattern
    transition: {
      duration: 1.5, // Duration of each oscillation
      repeat: Infinity, // Repeat the animation infinitely
    },
  },
};

const iconAnimationImage = {
  initial: { y: 0 }, // Starting position
  animate: {
    y: [0, 3, 0, -3, 0], // Define the oscillation pattern (opposite direction)
    transition: {
      duration: 1.8, // Duration of each oscillation (slightly different)
      repeat: Infinity, // Repeat the animation infinitely
    },
    
  },
};
const iconAnimationImage1 = {
    initial: { y: 1 }, // Starting position
    animate: {
      y: [0, 4, 0, -3, 0], // Define the oscillation pattern (opposite direction)
      transition: {
        duration: 1.9, // Duration of each oscillation (slightly different)
        repeat: Infinity, // Repeat the animation infinitely
      },
      
    },
  };

 

const Hospitalblood = () => {
  const {hosp:{hospital:{blood}}}=useSelector(state=>state.hospital)
  const [isVisible,setisVisible] = useState(false);
  const [bld,setBld] =useState(blood);
  const dispatch =useDispatch();
  const revealAfterDelay = () => {
    setTimeout(() => {
     setisVisible(true);
    }, 2); 
  };

  //THi is for incrementing blood
  const bloodIncrementHandler = async (group, quantity = 1) => {
    console.log("increment");
    try {
      const { data} = await axios.patch(`${server}/hospital/updateblood/increment/${group}/${quantity}`,
        {},
        {
          withCredentials:true
        }
      );
      console.log(data.IncreaseBlood);
     const blood=data.IncreaseBlood.blood
     
      dispatch({
        type: "loadHospSuccess",
        payload:{hospital:data.IncreaseBlood} ,
      });
      setBld({...blood,group:blood.group})
      console.log(bld);

    } catch (error) {
      console.log(error);
    }
  };
  //Now decerementing
const bloodDecrementHandler= async (group,quantity=1)=>{
  try {
    const { data} = await axios.patch(`${server}/hospital/updateblood/decrement/${group}/${quantity}`,
      {},
      {
        withCredentials:true
      }
    );
    console.log(data.DecreaseBlood);
   const blood=data.DecreaseBlood.blood
   
    dispatch({
      type: "loadHospSuccess",
      payload:{hospital:data.DecreaseBlood} ,
    });
    setBld({...blood,group:blood.group})
    console.log(bld);

  } catch (error) {
    console.log(error);
  }
}

  return (
    <span className='bloodbod'>
      <div className="header1">
        <h1>Available blood</h1>
        <motion.div variants={iconAnimationBlood} initial="initial" 
        animate="animate"
          style={{
            animationDelay: "0.3s",
          }}
        >
          <BiDonateBlood />
        </motion.div>
        <motion.div variants={iconAnimationImage} initial="initial" animate="animate"
          style={{
            animationDelay: "0.2s",margin:"2px" 
          }}
        >
          <img src={b1} alt="" style={{ height: "50px", width: "50px"}} />
        </motion.div>
        <motion.div variants={iconAnimationImage1} initial="initial" animate="animate"
          style={{
            animationDelay: "0.2s",margin:"2px" 
          }}
        >
         <img src={b2} alt="" style={{ height: "50px", width: "50px"}} />
        </motion.div>
      </div>
      <div className="bod" >
      <section className="tableClass" >
        <main>
          <table>
            <thead>
              <tr>
                <th>Blood Group</th>
                <th>Quantity available (in units)</th>
                <th>Increment</th>
                <th>Decrement</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>A+</td>
                <td>{bld.Ap}</td>
                <td onClick ={()=>bloodIncrementHandler("Ap")} style={{cursor:"pointer"}} ><FcPlus /></td>
                <td  onClick={ ()=>bloodDecrementHandler("Ap")} ><FcMinus /></td>
              </tr>
              <tr>
                <td>A-</td>
                <td>{bld.An}</td>
                <td ><FcPlus /></td>
                <td><FcMinus /></td>
              </tr>
              <tr>
                <td>B+</td>
                <td>{bld.Bp}</td>
                <td ><FcPlus /></td>
                <td><FcMinus /></td>
              </tr>
              <tr>
                <td>B-</td>
                <td>{bld.Bn}</td>
                <td ><FcPlus /></td>
                <td><FcMinus /></td>
              </tr>
              <tr>
                <td>AB+</td>
                <td >{bld.ABp}</td> 
                <td ><FcPlus /></td>
                <td><FcMinus /></td>
              </tr>
            </tbody>
          </table>
        </main>
      </section>
      <motion.div
      className="carousel"
      initial={{ opacity: 0 }}// Initial style (invisible)
      animate={{opacity: isVisible ? 1 : 0 }} // Animate opacity based on isVisible
      transition={{ duration: 0.9 ,ease:"easeInOut"}} // Animation duration in seconds
      onAnimationComplete={revealAfterDelay} // Call the
    >
      {/* <img src={cras} alt="" style={{ height: "80vh", width: "100%"}} /> */}
     
      </motion.div>
     
      </div>
    </span>
  );
};

export default Hospitalblood;








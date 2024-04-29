import React, { Fragment ,useEffect, useState} from 'react'
import { useInView } from 'react-intersection-observer';
import {TbArrowBigUpLineFilled} from "react-icons/tb";
import { motion, useAnimation } from 'framer-motion';

import "./Home.css"
import Header from '../Layout/Header/Header';
const Home = () => {

  const [ref, inView] = useInView({
    triggerOnce: true, // Only trigger once
    threshold: 0.5, // Trigger when 50% of the component is in view
  });
  const [ref1, inView1] = useInView({
    triggerOnce: true, // Only trigger once
    threshold: 0.5, // Trigger when 50% of the component is in view
  });
  const [ref2, inView2] = useInView({
    triggerOnce: true, // Only trigger once
    threshold: 0.5, // Trigger when 50% of the component is in view
  });
  const [ref3, inView3] = useInView({
    triggerOnce: true, // Only trigger once
    threshold: 0.5, // Trigger when 50% of the component is in view
  });

  const controls = useAnimation();
  const controls1 = useAnimation();
  const controls2 = useAnimation();




  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    } else if(inView1){
      controls1.start({ opacity: 1, y: 0 });
    }
    else {
      controls.start({ opacity: 0, y: 0 });
    }
  }, [inView, controls,]);
  useEffect(() => {
    if (inView1) {
      controls1.start({ opacity: 1, y: 0 });
    } 
    else {
      controls1.start({ opacity: 0, y: 0 });
    }
  }, [inView1, controls1,]);
  useEffect(() => {
    if (inView2) {
      controls2.start({ opacity: 1, y: 0 });
    } 
    else {
      controls2.start({ opacity: 0, y: 0 });
    }
  }, [inView2, controls2,]);
  



  return (

    <Fragment>

        <div className='banner'>

                <h1> Start </h1>
                <h1>Saving Lives </h1>
                <p>Become a donor or request for blood And help us to save lives 👇</p>
                <a href="#about"  >
                    <button className='butt'>Visit Us <TbArrowBigUpLineFilled/></button>
                </a>

        </div>

        <h2 className='homeHeading'>Explore Now</h2>

        <motion.div
        ref={ref}
        animate={controls}
        initial={{ opacity: 0, y: 0 }}
        transition={{ duration: 1 }}
        id="about"
        className="aboutcontainer"
      >
        <h2>About Blood Connect</h2>
        <p>
          Blood Connect is an innovative approach to health treatment in Egypt.
          We provide immediate access to blood donors across India, 24 hours a
          day, 7 days a week. Blood Connect is one of many community
          organizations that work together as one network.
        </p>
        <a href="/about" className="button">
          Learn More About us
        </a>
      </motion.div>




        <section id="instruction" class="caresection grid">
          <h2>Pre Donation Instructions</h2>
          <div class="caresectioncontent">
              <div>
                <img src='../../images/sleep.png'/>
                <p>Get enough sleep on the night of Donation.</p>
              </div>
              <div>
                <img src="../../images/eat.png" alt="error"/>
                <p>Eat a balanced meal two hours before donating.</p>
              </div>
              <div>
                <img src="../../images/no-drink.png" alt="error"/>
                <p>Should not drink liquid with caffeine 24 hours before donating.</p>
              </div>
              <div>
                <img src="../../images/Drink.png" alt="error"/>
                <p>You should drink more fluids than usual.</p>
              </div>
          </div>
         </section>


         <motion.div 
         ref={ref2}
         animate={controls2}
         initial={{ opacity: 0, y: 0 }}
         transition={{ duration: 2 }}
         
         class="main">
          <h1>BLOOD TYPES</h1>
      
          <ul class="cards">
            <li class="cards_item">
              <div class="card">
                <div class="card_image"><img id="bloodtype" src="../../images/A+.png"/></div>
                <div class="card_content">
                  <h2 class="card_title">A+</h2>
                  <p class="card_text">A+ is a powerful blood type because it is the second most common blood type</p>
                  
                </div>
              </div>
            </li>
            <li class="cards_item">
              <div class="card">
                <div class="card_image"><img id="bloodtype"src="../../images/A-.png"/></div>
                <div class="card_content">
                  <h2 class="card_title">A-</h2>
                  <p class="card_text">has A antigens on the red blood cells with anti-B antibodies in the plasma</p>
                  
                </div>
              </div>
            </li>
            <li class="cards_item">
            
             
              <div class="card">
                <div class="card_image"><img id="bloodtype" src="../../images/A+.png"/></div>
                <div class="card_content">
                  <h2 class="card_title">B+</h2>
                  <p class="card_text"> has B antigens with anti-A antibodies in the plasma</p>
                  
                </div>
              </div>
              
            
            </li>
            <li class="cards_item">
              <div class="card">
                <div class="card_image"><img id="bloodtype" src="../../images/B-.png"/></div>
                <div class="card_content">
                  <h2 class="card_title">B-</h2>
                  <p class="card_text"> has B antigens with anti-A antibodies in the plasma</p>
                  
                </div>
              </div>
            </li>
            <li class="cards_item">
              <div class="card">
                <div class="card_image"><img id="bloodtype"src="../../images/Ab+.png"/></div>
                <div class="card_content">
                  <h2 class="card_title">AB+</h2>
                  <p class="card_text">has both A and B antigens, but no antibodies</p>
                  
                </div>
              </div>
            </li>
            <li class="cards_item">
              <div class="card">
                <div class="card_image"><img id="bloodtype" src="../../images/Ab-.png"/></div>
                <div class="card_content">
                  <h2 class="card_title">AB-</h2>
                  <p class="card_text">has both A and B antigens, but no antibodies</p>
                  
                </div>
              </div>
            </li>
            <li class="cards_item">
              <div class="card">
                <div class="card_image"><img id="bloodtype" src="../../images/o+.png"/></div>
                <div class="card_content">
                  <h2 class="card_title">O+</h2>
                  <p class="card_text">O has no antigens, but both anti-A and anti-B antibodies in the plasma</p>
                  
                </div>
              </div>
            </li>
            <li class="cards_item">
              <div class="card">
                <div class="card_image"><img id="bloodtype"src="../../images/o-.png"/></div>
                <div class="card_content">
                  <h2 class="card_title">O-</h2>
                  <p class="card_text">has no antigens, but both anti-A and anti-B antibodies in the plasma</p>
                  
                </div>
              </div>
            </li>
           
          </ul>
        </motion.div>


        <motion.section 
        ref={ref1}
        animate={controls1}
        initial={{ opacity: 0, y: 0 }}
        transition={{ duration: 2 }}
        class="instruction grid">
          <div class="instructionheader">
            <h2>Donations Instructions</h2>
          </div>
          <div class="instructionmain">
            <div class="maindescription">
              <div class="left">
                <img src="../../images/reception.png" alt="error"/>
              </div>
              <div class="right">
                <h3>Go to the Reception</h3>
                <p>Donor can start their journey by contacting the receptionasist.</p>
              </div>
            </div>


            <div class="maindescription">
              <div class="left">
                <img src="../../images/bloodsample.png" alt="error"/>
              </div>
              <div class="right">
                <h3>Take Blood Sample</h3>
                <p>Take blood sample and test to determine weather to donate or not.</p>
              </div>
            </div>

            <div class="maindescription">
              <div class="left">
                <img src="../../images/Doctor'spermit.png" alt=""/>
              </div>
              <div class="right">
                <h3>Doctor's permit</h3>
                <p>The doctor makes the decision about accepting blood donation.</p>
              </div>
            </div>

            <div class="maindescription">
              <div class="left">
                <img src="../../images/eat.png" alt="error"/>
              </div>
              <div class="right">
                <h3>Food</h3>
                <p> Before donating it is necessary to eat a meal, do not donate blood on an empty stomach.</p>
              </div>
            </div>

            <div class="maindescription">
              <div class="left">
                <img src="../../images/donationroom.png" alt="error"/>
              </div>
              <div class="right">
                <h3>Blood Donation</h3>
                <p> The donation is made in donation room.</p>
              </div>
            </div>

            <div class="maindescription">
              <div class="left">
                <img src="../../images/Donorscertificate.png" alt="Error"/>
              </div>
              <div class="right">
                <h3>Donor's Certificate</h3>
                <p>After donation,donor certificate will be issued. </p>
              </div>
            </div>
            
          </div>
         </motion.section>


         <section id="instructions" class="caresection grid">
      <h2>Post donation instructions</h2>
      <div class="caresectioncontent">
        <div>
          <img src="../../images/Drink.png" alt="drink photo" />
          <p>You should drink more fluids than usual.</p>
        </div>
        <div>
          <img src="../../images/break.png" alt="break photo" />
          <p>After donating, take a break and snack.</p>
        </div>
        <div>
          <img src="../../images/Leave.png" alt="leave photo" />
          <p>After 10-15 minutes you can leave the place.</p>
        </div>
        <div>
          <img src="../../images/gym.png" alt="gym photo" />
          <span class="icon icon--error"></span>
          <p>Avoid heavy physical activity for 5 hours.</p>
        </div>
      </div>
    </section>

    
    
    <div className="container">
      <div className="heading">Our Achievements</div>
      <div className="counter-container">
        <Counter targetValue={3563} label="Lives Saved" />
        <Counter targetValue={17893} label="Donors" />
      </div>
    </div>
    </Fragment>
  )
}


const Counter = ({ targetValue, label }) => {
  const [count, setCount] = useState(0);
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true, // Only trigger once
    threshold: 1, // Trigger when 50% of the component is in view
  });
  useEffect(() => {
    if(inView){
    controls.start({
      opacity: 1,
      scale: 1,
      transition: { duration: 1 },
    });

    const interval = setInterval(() => {
      setCount((prevCount) => {
        const increment = Math.ceil((targetValue - prevCount) / 100);
        const nextCount = prevCount + increment;

        if (nextCount >= targetValue) {
          clearInterval(interval);
          return targetValue;
        }

        return nextCount;
      });
    }, 10);

    return () => clearInterval(interval);}
  }, [controls, targetValue,inView]);

  return (
    <motion.div
    ref={ref}
      className="counter"
      animate={controls}
      initial={{ opacity: 0, scale: 0.5 }}
    >
      <h3 className="count">{count}</h3>
      <h6>{label}</h6>
    </motion.div>
  );
};





export default Home

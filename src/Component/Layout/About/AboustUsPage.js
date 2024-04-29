import React, { useState } from 'react';
import './about.css';


const AboutUsPage = () => {

    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
      setIsHovered(true);
    };
  
    const handleMouseLeave = () => {
      setIsHovered(false);
    };
  
    const boxStyle = {
      backgroundColor: isHovered ? '#FFCCCB' : '#f5f5f7',
      padding: '20px',
      borderRadius: '15px',
      boxShadow: '0 4px 4px rgba(0.5, 0.5, 0.5, 0.5)',
      transition: 'background-color 0.3s ease-in-out',
    };

  return (
    <div>
        {/* NAVBAR */}
      {/* Header */}
      <header id="main" className="grid mainheader">
        <section className="headerdescription">
          <h2>
            Donate <span>Blood</span> <br />
            To Save a Life
          </h2>
          <p>
            Connecting volunteer blood donors with patients within minutes at
            <span> zero cost.</span>
          </p>
        
        </section>
         
        <section className="headerimage">
          <div className="animations">
            <img src="./k.jpeg" alt="img1" />
          </div>
        </section>
      </header>

      {/* About Us Section */}
      <div className="aboutus">
        <div className="a_image">
          <img src="images/about.jpeg" alt="#" />
        </div>
        <br />
        <br />
        <div className="a_content"  style={boxStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <h1>Blood Bank Today</h1>
          <br />
          <br />
          <br />

          <h3>Mission</h3>

          <p>
            To contribute towards the problem of shortage of blood in India by
            raising awareness and improving donor experience and thereby,
            become a 360-degree solution provider.
          </p>
          <br />
          <h3>Vision</h3>
          <p>Reach Blood Sufficient India through Voluntary Blood Donations.</p>
        </div>
      </div>

      {/* Services Section */}
      <div class="services">
        <div class="title">
          <div> <p style={{ color: 'red' }}> Using our services</p>
           <span> Using our service is as simple as saying, Hello!</span>
        </div>
    </div>
          <div class="stepcolumn">
            <div class="stepbox animate">
            <div class="stepnumber">1.</div>
            <div class="stepinfo">
                <div class="stepname">
                   <img src="register.png" alt=""/>       Register </div>
                <p>Register your account so you can immediately start using Save Life Connect</p>
            </div>
        </div>
        <div class="stepbox animate">
            <div class="stepnumber">2.</div>
            <div class="stepinfo">
                <div class="stepname">
                   <img src="o+.png" alt=""/> Post a Blood request </div>
                <p>Post a blood request using this website or our app and locate volunteer blood donors within your area.</p>
            </div>
        </div>
        <div class="stepbox animate">
            <div class="stepnumber">3.</div>
            <div class="stepinfo">
                <div class="stepname">
                   <img src="o+.png" alt=""/> Get notified</div>
                <p>Get notified in real time when a donor has been found and when the blood is on its way to the patient</p>
            </div>
        </div>
        <div class="stepbox animate">
            <div class="stepnumber">4.</div>
            <div class="stepinfo">
                <div class="stepname">
                   <img src="save.png" alt=""/>Save a Life</div>
                <p>Donating or requesting blood share the same noble and final purpose : Saving a Life.</p>
            </div>
        </div>
          </div>
        </div>

      {/* More Info Section */}
      <div className="moreinfo" style={{ fontFamily: 'Cambria, Cochin, Georgia, Times, Times New Roman, serif' }}>
       <div class="hedding">
           <p id="p1" >What is this all about ?</p>
           <p id="p2" >We solve the problem of blood emergencies by connecting blood donors directly with people in blood need.</p>
       </div>
      
       <div class="infocards" style={boxStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div class="card1 color-change">
            <img src="images/A-.png" alt=""/>
            <h1>What do we do?</h1>
            <p>We connect blood donors with recipients, without any intermediary such as blood banks, for an efficient and seamless process.</p>
        </div>
        <div class="card1 color-change">
            <img src="images/A-.png" alt=""/>
            <h1>What is the benefit of donating blood?</h1>
            <p>Every two seconds, someone in the U.S. requires a blood transfusion, according to the American Red Cross</p>
        </div>
        <div class="card1 color-change">
            <img src="images/A-.png" alt=""/>
            <h1>What do we do?</h1>
            <p>We connect blood donors with recipients, without any intermediary such as blood banks, for an efficient and seamless process.</p>
        </div>
        <div class="card1 color-change">
            <img src="images/A-.png" alt=""/>
            <h1>What do we do?</h1>
            <p>We connect blood donors with recipients, without any intermediary such as blood banks, for an efficient and seamless process.</p>
        </div>
        <div class="card1 color-change">
            <img src="images/A-.png" alt=""/>
            <h1>What do we do?</h1>
            <p>We connect blood donors with recipients, without any intermediary such as blood banks, for an efficient and seamless process.</p>
        </div>
          <div class="card1 color-change">
              <img src="images/A-.png" alt=""/>
              <h1>What do we do?</h1>
              <p>We connect blood donors with recipients, without any intermediary such as blood banks, for an efficient and seamless process.</p>
          </div>
         </div>
        </div>

      {/* Footer Section */}
     
    </div>
  );
};

export default AboutUsPage;

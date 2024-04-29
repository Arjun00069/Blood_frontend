import React, { useState } from "react";
import "./SidebarMan.css";
// import Logo from "../../imgs/logo.png";
import { UilSignOutAlt } from "@iconscout/react-unicons";
import { SidebarData } from "../Data/Data";
import { UilBars } from "@iconscout/react-unicons";
import { motion } from "framer-motion";


const Sidebar = (props) => {
  const {setMyCurrentField} = props;
  const [selected, setSelected] = useState(0);
  const [expanded, setExpanded] = useState(true);

  const [showComponent1, setShowComponent1] = useState(false);
  const [showComponent2, setShowComponent2] = useState(false);
  const [showComponent3, setShowComponent3] = useState(false);
  const [showComponent4, setShowComponent4] = useState(false);

  const sidebarVariants = {
    true: {
      left: '0'
    },
    false: {
      left: '-60%'
    }
  };

  return (
    <>
      {/* <div className="bars" style={expanded ? { left: '60%' } : { left: '5%' }} onClick={() => setExpanded(!expanded)}>
        <UilBars />
      </div> */}
      <motion.div className='SidebarMan'
        variants={sidebarVariants}
        animate={window.innerWidth <= 768 ? `${expanded}` : ''}
      >
        <div className="logoMan">
          {/* <img src={Logo} alt="logoMan" /> */}
          <span>
            User
          </span>
        </div>

        <div className="menuMan">
          {SidebarData.map((item, index) => (
            <div
              className={selected === index ? "menuItemMan activeMan" : "menuItemMan"}
              key={index}
              onClick={() => {
                setMyCurrentField(item.heading);
                setSelected(index);
                // Toggle visibility of components based on heading
                setShowComponent1(item.heading === "Profile");
                setShowComponent2(item.heading === "Search Blood");
                setShowComponent3(item.heading === "Change Password");
                setShowComponent4(item.heading === "Donation History");
              }}
            >
              <item.icon />
              <span>{item.heading}</span>
            </div>
          ))}

          {/* Conditionally render components based on state variables */}
          {/* {showComponent1 && <Field1 />}
          {showComponent2 && <Field2 />}
          {showComponent3 && <Field3 />}
          {showComponent4 && <Field4 />} */}

          {/* signoutIcon */}
          <div className="menuItemMan">
            <UilSignOutAlt />
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Sidebar;

import { useState } from 'react';
import './maindash.css';
import MainDashMan from './MainDash/MainDashMan';
import SidebarMan from './sidebar/SidebarMan';


function MainDash() {
  const [currentField, setCurrentField] = useState('field1');
  const setMyCurrentField = (field)=>{
    setCurrentField(field);
  }
  return (
    <div className="dashapp">
      <div className="AppGlassMan">
          <SidebarMan setMyCurrentField={setMyCurrentField}/>
          <MainDashMan currentField={currentField}/>
     
      </div>
    </div>
  );
} 

export default MainDash;

import React from 'react';
import './MainDashMan.css'
import Profile from '../NavRoute/Profile';
import DonationHistory from '../NavRoute/DonationHistory';
import SearchBloodForm from '../NavRoute/SearchBloodForm';
import ChangePassw from '../NavRoute/ChangePassw';


const MainDashMan = (props) => {
    const {currentField} = props;
  return (
    <div>
       <h1 className="dash-title">Welcome to Blood Connect!</h1><hr />
       
       <div>
        {
            currentField === 'Donation History' ? (
                <DonationHistory/>
            ) : currentField === 'Search Blood' ? (
                <SearchBloodForm/>
            ) : currentField === 'Change Password' ? (
             
                <ChangePassw/>
                
            ) : (
                <Profile/>
            )
        }
       </div>
    </div>
  );
}

export default MainDashMan;

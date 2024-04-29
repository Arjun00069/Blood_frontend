import React from 'react'
import './card.css'
import 
{ BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill}
 from 'react-icons/bs'
const Card = ({name,icon,delay}) => {
  return (
    
    <div className='main-cards'>
            <div className='card' style={{animationDelay:delay}}>
                <div className='card-inner'>
                    <h3>{name}</h3>
                   {icon}
                </div>
                <h1>300</h1>
            </div>
            </div>
    
  );
}

export default Card;
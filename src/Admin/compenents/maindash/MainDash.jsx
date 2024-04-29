import React from 'react'
import './MainDash.css'
import Cards from '../cards/Cards'
import BasicTable from '../table/Table'
const MainDash = () => {
  return (
   <div className="MainDash">
        <h1>Dashboard</h1>
        <Cards />
        < BasicTable/>
   </div>
  )
}

export default MainDash
import React from 'react'
import Sidebar from './Sidebar'
import Dashboard from './Dashboard'
import "../styles/Codeant.css"

function Codeant() {
  return (
    <div className='codeant'>
        
      <Sidebar/>
  
      <div className='reposit'>
      <Dashboard/>
      </div>
    </div>
  )
}

export default Codeant

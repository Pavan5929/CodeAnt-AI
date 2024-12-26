import React from 'react'
import Repositories from './Repositories';
import Lists from './Lists';
import { useState } from 'react';

function Dashboard() {

  const [searchTerm, setSearchTerm] = useState("");
  return (
     <div className='dashboard'>
      <Repositories searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Lists searchTerm={searchTerm} />
    </div>
  )
}

export default Dashboard

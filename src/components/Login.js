import React from 'react';
import Card from "../components/Card"
import Signin from './Signin';
import "../styles/Login.css"

function Login() {
  

  return (
    <div className='login'>
      
   <Card/>
   <div className='signin'>
   <Signin/>
   </div>
   </div>
  );
}

export default Login;

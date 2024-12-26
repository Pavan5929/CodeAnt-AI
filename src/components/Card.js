import React from 'react';
import logo from "../images/logo.svg";
import "../styles/StatsCard.css";
import subtract from "../images/Subtract.svg";
import graph from "../images/graph.svg";
function StatsCard() {
  return (
    <div className="stats-card">
        <img className='subtract' src={subtract} alt="subtract" />
        <div className='stats'>
        <div className='logo-login'>
        <img src={logo} alt="logo" />
      <h2>AI to Detect & Autofix Bad Code</h2>
      </div>
      <hr className='line'></hr>
      <div className="stats-details">
        <div className="stats-list">
          <h3>30+</h3>
            <h3>10K+</h3>
             <h3>100K+</h3>
         
        </div>
        <div className="stats-list">
         <p>Language Support</p>
          <p className='dev'>Developers</p>
             <p className='hour'>Hours Saved</p>
        </div>
        
      </div>
      </div>
      <div className="stats-card-2">
      <div className="card-icon">
        {/* Placeholder for the icon */}
       <img src={graph} alt="graph" />
        <div className="card-stats-2">
          <h4>Issues Fixed</h4>
          <h2>500K+</h2>
        </div>
      </div>
      <div className="card-content">
        
        <div className="card-growth">
          <p>
            <span className="growth-icon">↑14% </span>
          </p>
          <div className='weeks'>
             This week
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default StatsCard;

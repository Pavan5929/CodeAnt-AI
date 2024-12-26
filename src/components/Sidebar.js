import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/Sidebar.css";
import logo from "../images/logo.svg";
import repositoryimage from "../images/repositoryimage.svg";
import AI from "../images/AIcode.svg";
import cloud from "../images/cloud.svg";
import use from "../images/use.svg";
import settings from "../images/settings.svg";
import support from "../images/support.svg";
import logout from "../images/logout.svg";
import navbarOpenIcon from "../images/navbar.svg"; // Bars icon
import navbarCloseIcon from "../images/navbarCloseIcon.png"; // Close icon

function Sidebar() {
  const [menuOpen, setMenuOpen] = useState(false); // State to toggle the menu
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <>
      {/* Overlay for background */}
      {menuOpen && (
        <div
          className="menu-overlay"
          onClick={() => setMenuOpen(false)} // Close the menu when clicking outside
        ></div>
      )}
      <div className="sidebar">
        <div className="logo">
          <img src={logo} alt="logo" />
          <h1>CodeAnt AI</h1>
          {/* Hamburger menu icon */}
          <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <img src={menuOpen ? navbarCloseIcon : navbarOpenIcon} alt="navbar toggle" />
          </button>
        </div>

        {/* Conditionally render the side content */}
        <div className={`side ${menuOpen ? "open" : ""}`}>
          <div className="up">
            <div className="dropdown">
              <select className="dropdown-select">
                <option>UtkarshDhairyaPan...</option>
                <option>Repository 1</option>
                <option>Repository 2</option>
              </select>
            </div>
            <div className="menu">
              <button className="menu-item active">
                <span className="icon"><img src={repositoryimage} alt="image1" /></span> Repositories
              </button>
              <button className="menu-item">
                <span className="icon"><img src={AI} alt="ai" /></span> AI Code Review
              </button>
              <button className="menu-item">
                <span className="icon"><img src={cloud} alt="cloud" /></span> Cloud Security
              </button>
              <button className="menu-item">
                <span className="icon"><img src={use} alt="use" /></span> How to Use
              </button>
              <button className="menu-item">
                <span className="icon"><img src={settings} alt="settings" /></span> Settings
              </button>
            </div>
          </div>
          <div className="down">
            <div className="bottom-menu">
              <button className="menu-item">
                <span className="icon"><img src={support} alt="support" /></span> Support
              </button>
              <button className="menu-item" onClick={handleLogout}>
                <span className="icon"><img src={logout} alt="logout" /></span> Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;

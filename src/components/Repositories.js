import React from 'react';
import "../styles/Repositories.css";
import magnifyingGlass from "../images/magnifyingGlass.svg";
import refreash from "../images/refreash.svg";
import plus from "../images/plus.svg";

function Repositories({ searchTerm, setSearchTerm }) {
  return (
    <div className="repositories-header">
      <div className="header-left">
        <div className='rep'>
          <h2>Repositories</h2>
          <p>33 total repositories</p>
        </div>
        <div className="header-right">
          <button className="refresh-button"><img src={refreash} alt="refreash" /><div className='text'>Refresh All</div></button>
          <button className="add-button"><img src={plus} alt="plus" /> <div className='text'> Add Repository</div></button>
        </div>
      </div>
      <div className="search-container">
        <img src={magnifyingGlass} alt="Search" className="search-icon" />
        <input
          type="text"
          placeholder="Search Repositories"
          className="search-input"
          value={searchTerm} // Controlled input
          onChange={(e) => setSearchTerm(e.target.value)} // Update search term
        />
      </div>
    </div>
  );
}

export default Repositories;

// Navbar.js
import React from 'react';
import './Navbar.css';

function Navbar({ accountInfo }) {
 
  return (
    <div className="Navbar">
      <div className="logo">Logo</div>
      <div className="search-bar">
        <input type="text" placeholder="Rechercher" />
      </div>
      <div className="account-info">
        <span>{accountInfo && accountInfo.name}</span>
        <img src={accountInfo && accountInfo.photo} alt="Photo de profil" />
      </div>
    </div>
  );
}

export default Navbar;


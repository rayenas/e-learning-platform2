// Navbar.js
import React from 'react';
import './Navbar.css';

function Navbar({ accountInfo }) {
 
  return (
    <div className="Navbar">
      <div className="logo">Logo</div>
      <div className="search-bar">
        {/* Your search bar content */}
      </div>
      <div className="home-links">
        <ul>   
        <li><a href="/Uploadcour">إنشاء مهام أو دروس</a></li>
        <li> <a href="/agenda-sidi">إنشاء موعد إمتحان</a></li>
        <li><a href="/Task_sidi">مهام</a></li>
        <li> <a href="/profils">حسابك</a></li>
        </ul>
      </div>
      <div className="account-info">
        <span>{accountInfo && accountInfo.name}</span>
        <img src={accountInfo && accountInfo.photo} alt="Photo de profil" href="/"/>
      </div>
    </div>
  );
}

export default Navbar;


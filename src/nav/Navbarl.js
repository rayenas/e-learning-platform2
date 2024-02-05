// Navbar.js
import React from 'react';
import './Navbar.css';

function Navbarl({ accountInfo }) {
 
  return (
    <div className="Navbar">
      <div className="logo">Logo</div>
      <div className="search-bar">
        {/* Your search bar content */}
      </div>
      <div className="home-links">
        <ul>
        <li><a href="/jwadou">الصفحة الشخصية</a></li>
        <li> <a href="/agenda-jwadou">المواعيد</a></li>
        <li> <a href="/cour">الدروس</a></li>
        <li><a href="/task">مهام</a></li>
        <li><a href="/profil">حسابك</a></li>
        </ul>
      </div>
      <div className="account-info">
        <span>{accountInfo && accountInfo.name}</span>
        <img src={accountInfo && accountInfo.photo} alt="Photo de profil" href="/"/>
      </div>
    </div>
  );
}

export default Navbarl;


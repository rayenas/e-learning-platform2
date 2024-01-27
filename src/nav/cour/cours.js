
// ProfessionalDistribution.js

import React from 'react';
import './cours.css';

function cours() {
  return (
    <div className="cours">
      <div className='carte-cours' >
      <h2>الدروس </h2>
      <div className="card-container">
        <div className="card">
          <a href='#'><h3>اللغة العربية </h3>
          <p>Description of Card 1</p></a>
        </div>
        <div className="card">
          <a href='#'><h3>اللغةالانجليزية </h3>
          <p>Description of Card 1</p></a>
        </div>
        <div className="card">
          <a href='#'><h3> الرياضيات </h3>
          <p>Description of Card 1</p></a>
        </div>
        <div className="card">
          <a href='#'><h3> الفيزياء </h3>
          <p>Description of Card 1</p></a>
        </div>
        <div className="card">
          <a href='#'><h3>علوم الحاسوب </h3>
          <p>Description of Card 1</p></a>
        </div>
        {/* Add more cards as needed */}
      </div>
      </div>
    </div>
  );
}

export default cours;

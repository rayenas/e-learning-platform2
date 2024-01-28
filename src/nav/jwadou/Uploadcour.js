import React, { useState } from 'react';

import './Uploadcour.css';



const Uploadcour = () => {
  const [file, setFile] = useState(null);
  const [uploadedImage, setUploadedImage] = useState('');

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('file', file);
  };
  const [selectedOption, setSelectedOption] = useState(null);

  // Gestionnaire d'événements pour mettre à jour l'état lorsqu'une option est sélectionnée
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <div className="upload-task">
        <div className='card-task' >
           
      <h2>Upload Task</h2>
      <div className="form-group">

      <div className="radio-container">
        <input
          className="radio-input"
          type="radio"
          value="option1"
          checked={selectedOption === "option1"}
          onChange={handleOptionChange}
        />
        <label className="radio-label"> درس</label>
      </div>
      <div className="radio-container">
        <input
          className="radio-input"
          type="radio"
          value="option2"
          checked={selectedOption === "option2"}
          onChange={handleOptionChange}
        />
        <label className="radio-label">مهام </label>
      </div>

        <label htmlFor="file">Select a file:</label>
        <input type="file" id="file" onChange={handleFileChange} />
      </div>
      <button onClick={handleUpload}>Upload</button>
      {uploadedImage && (
        <div className="uploaded-image">
          <img src={uploadedImage} alt="Uploaded" />
        </div>
      )}
    </div></div>
  );
};

export default Uploadcour;
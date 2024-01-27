import React, { useState } from 'react';

import './upl.css';



const UploadTask = () => {
  const [file, setFile] = useState(null);
  const [uploadedImage, setUploadedImage] = useState('');

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('file', file);
  };

  return (
    <div className="upload-task">
        <div className='card-task' >
           
      <h2>Upload Task</h2>
      <div className="form-group">
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

export default UploadTask;
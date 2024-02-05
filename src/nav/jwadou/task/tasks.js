import React, { useState } from 'react';
import Navbarl from '../../Navbarl';
import './tasks.css';

const Tasks = () => {
    const [file, setFile] = useState(null);
    const [uploadedImage, setUploadedImage] = useState('');

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleUpload = async () => {
        if (file) {
            const formData = new FormData();
            formData.append('file', file);

            // Assuming you have an API endpoint for uploading images
            try {
                const response = await fetch('your-upload-url', {
                    method: 'POST',
                    body: formData,
                });
                const data = await response.json(); // Assuming response returns the uploaded image URL
                setUploadedImage(data.imageUrl); // Update the uploadedImage state with the image URL
            } catch (error) {
                console.error('Error uploading the image:', error);
            }
        }
    };

    return (
        <div className='tasks'>
            <Navbarl />
            <div className='file'>
            <label htmlFor="file">Select a file:</label>
            <input type="file" id="file" onChange={handleFileChange} />
            <button onClick={handleUpload}>Upload</button>
            {uploadedImage && (
                <div className="uploaded-image">
                    <img src={uploadedImage} alt="Uploaded" />
                </div>
            )}
            </div>
        </div>
    );
};

export default Tasks;

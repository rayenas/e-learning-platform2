
import React, { useState } from "react";
import "./comptjj.css";

const Comptjj = () => {
  const [profilePicture, setProfilePicture] = useState(
    "https://scontent.ftun16-1.fna.fbcdn.net/v/t39.30808-6/365412593_3316195845272031_3087395920138562957_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=4eYUTYXr2r4AX8DX5DE&_nc_ht=scontent.ftun16-1.fna&oh=00_AfCdHyJpFxi7jHiKwl-kb0UkLPmZqAKXahYzZiV_nvJ0-Q&oe=65B94206"
  );

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setProfilePicture(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="profile-page">
      <div className='carte-profil' >
      
      <h1>Profile Page</h1>
      <img src={profilePicture}  className="profile-picture" alt="Photo de profil"/>
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="profile-picture-upload"
      />
      <div className="personal-data">
        <h2>Personal Data</h2>
        <p>Name: rayen</p>
        <p>Email: john.doe@example.com</p>
      </div>
      
    </div></div>
  );
};

export default Comptjj;
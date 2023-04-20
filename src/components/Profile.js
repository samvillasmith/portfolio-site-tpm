import React from 'react';

const Profile = ({ photo, style }) => (
  <div className="profile-container">
    <div className="photo-container">
      <img src={photo} alt="Profile" style={style} />
    </div>
    <div className="info-container">
      {/* Other information goes here */}
    </div>
  </div>
);

export default Profile;

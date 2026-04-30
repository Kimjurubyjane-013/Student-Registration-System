import React, { useEffect, useState } from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("loginData"));
    if (data) {
      setUser(data);
    } else {
      navigate("/login");
    }
  }, [navigate]);

  const Cancel= () => {
    localStorage.getItem("isLoggedIn");
    localStorage.getItem("loginData")
    navigate("/")
  }

  const handleLogout = () => {
    localStorage.removeItem("loginData");
    navigate("/login");
  };

  if (!user) return null;

  return (
    <div>
      <div className="column">
        <h2>
          <i className="fa-solid fa-graduation-cap"></i> Student Registration
          System
        </h2>

        <li onClick={() => navigate("/")}>
          <i class="fa-solid fa-house"></i>
        </li>
      </div>
  <div className="profile-page">
    <h2 className="profile-title">Profile</h2>

    <div className="profile-card">
      <div className="avatar big">
        {user.name?.charAt(0).toUpperCase()}
      </div>

      <h3>{user.name}</h3>

      <div className="info">
        <p><strong>Roll No:</strong> {user.rollNo}</p>
        <p><strong>Date of Birth:</strong> {user.dob}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <h3>Registration Completed!</h3>
      </div>

      <div className='cancel'>
        <button className="logout-btn" onClick={handleLogout}>Log Out</button>
      <button className="cancel-btn" onClick={Cancel}>Cancel</button>
      </div>
    </div>
  </div>
    </div>
);
};

export default Profile;
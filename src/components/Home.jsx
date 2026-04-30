/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";
import "./Home.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [show, setShow] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userLetter, setUserLetter] = useState("");
  const navigate = useNavigate();

  // ✅ check login + get first letter
  useEffect(() => {
    const status = localStorage.getItem("isLoggedIn");
    const user = JSON.parse(localStorage.getItem("loginData"));

    if (status === "true" && user?.name) {
      setIsLoggedIn(true);
      setUserLetter(user.name.charAt(0).toUpperCase()); // 🔥 first letter
    }
  }, []);

  

  return (
    <div className="home">
      <div className="container">
        <div className="row">
          <h2>
            <i className="fa-solid fa-graduation-cap"></i> Student Registration
            System
          </h2>

          <ul className={show ? "menu active" : "menu"}>
            {/* ❌ Not logged in */}
            {!isLoggedIn && (
              <>
                <li onClick={() => navigate("/register")}>Register</li>
                <li onClick={() => navigate("/login")}>Login</li>
              </>
            )}

            {/* ✅ Logged in → show letter avatar */}
            {isLoggedIn && (
              <li onClick={() => navigate("/profile")}>
                <div className="avatar">{userLetter}</div>
              </li>
            )}

            <li onClick={() => navigate("/about")}>About</li>
          </ul>

          <div className="hamburger" onClick={() => setShow(!show)}>
            <i className="fa-solid fa-bars"></i>
          </div>
        </div>
      </div>

      <div className="bg-img">
        {/* <img src="/image2.png"></img> */}
      </div>
    </div>
  );
};

export default Home;


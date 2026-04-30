import React, { useState } from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [login, setLogin] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const savedUser = JSON.parse(localStorage.getItem("studentForm"));
    if (
    savedUser &&
    login.email === savedUser.email &&
    login.password === savedUser.password
  ) {
    // ✅ login success
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("loginData", JSON.stringify(savedUser));

    navigate("/");
  } else {
    alert("Invalid email or password");
  }
  };


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

      <form className="form-home" onSubmit={handleSubmit} autoComplete="off">
        <div className="form-login">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={login.name}
            onChange={handleChange}
            placeholder="Enter Name"
          />
        </div>

        <div className="form-login">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={login.email}
            onChange={handleChange}
            placeholder="Enter Email"
            autoComplete="off"
          />
        </div>

        <div className="form-login">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={login.password}
            onChange={handleChange}
            placeholder="Enter Password"
            autoComplete="new-password"
          />
        </div>

        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default Login;

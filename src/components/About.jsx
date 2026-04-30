import React from 'react'
import "./Home.css"
import { useNavigate } from 'react-router-dom'

const About = () => {
    const navigate = useNavigate();
  return (
    <div>
      <div className="column">
        <h2>
          <i className="fa-solid fa-graduation-cap"></i> Student Registration System
        </h2>
        <li onClick={() => navigate("/")}><i class="fa-solid fa-house"></i></li>
      </div>
      <div className="about-container">
        <div className="about-box">
          <h1>📘 About This System</h1>

          <p>
            The <strong>Student Registration System</strong> is a simple web
            application designed to manage student information efficiently.
            It allows users to register students, store their details, and
            confirm successful submissions.
          </p>

          <h2>✨ Features</h2>
          <ul>
            <li>✔ Easy student registration form</li>
            <li>✔ Input validation (Name, Roll No, Email, etc.)</li>
            <li>✔ Local storage data saving</li>
            <li>✔ Payment & success confirmation page</li>
          </ul>

          <h2>🎯 Purpose</h2>
          <p>
            This project is built to practice <strong>React.js</strong>,
            form handling, routing, and UI design. It simulates a real-world
            student registration workflow.
          </p>

          <h2>👩‍💻 Developer</h2>
          <p>
            Created by a passionate learner exploring modern web development
            using React and JavaScript.
          </p>

          <button onClick={() => navigate("/")}>
            Back to Home
          </button>
        </div>
        </div>
    </div>
  )
}

export default About

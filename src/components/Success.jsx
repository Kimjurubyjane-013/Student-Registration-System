import React,{useRef} from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import html2canvas from "html2canvas";

const Success = () => {
  const navigate = useNavigate();
  const student = JSON.parse(localStorage.getItem("studentForm"));
   const handleFinish = () => {
    localStorage.removeItem("studentForm");
  localStorage.removeItem("gmail");
  localStorage.removeItem("password");

    navigate("/");
  };

  const boxRef = useRef();

  const handleDownload = async () => {
  if (!boxRef.current) return;

   const canvas = await html2canvas(boxRef.current, {
      scale: 2,
      useCORS: true,
    });

  const image = canvas.toDataURL("image/png");

  const link = document.createElement("a");
  link.href = image;
  link.download = "registration-info.png";
  link.click();
};

  return (
    <div>
      <div className="column">
        <h2>
          <i className="fa-solid fa-graduation-cap"></i> Student Registration
          System
        </h2>

        <li onClick={() => navigate("/")}>
          <i className="fa-solid fa-house"></i>
        </li>
      </div>
      <div className="success-page">
        <div className="falling falling1">🎉 </div>
        <div className="falling falling2">🎊</div>
        <div className="falling falling3">✨</div>
        
        <div className="success-box" ref={boxRef}>
          <h1>✅Payment Successful</h1>
          <h2>
            <i class="fa-solid fa-check"></i>Registration Completed
          </h2>
          <p>
            <strong>Name:</strong>
            <span>{student?.name}</span>
          </p>
          <p>
            <strong>Roll No:</strong>
            <span>{student?.rollNo}</span>
          </p>
          <p>
            <strong>Date of Birth:</strong>
            <span>{student?.dob}</span>
          </p>
          <p>
            <strong>Email:</strong>
            <span>{student?.email}</span>
          </p>
           <p>
    <strong>Date:</strong> {new Date().toLocaleDateString()}
  </p>
          <div className="but">
            <button type="button" onClick={handleFinish}>Thank You</button>
          <button onClick={handleDownload}><i class="fa-solid fa-download"></i>
          Save Info
        </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;

/* eslint-disable react-hooks/exhaustive-deps */
import React,{useState, useEffect} from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Home.css";

const Payment = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [color,setColor] = useState("");
   
  const [data, setData] = useState(() => {
  return (
    location.state ||
    JSON.parse(localStorage.getItem("studentForm") || "null")
  );
});

  useEffect(() => {
  if (!location.state) {
    const saved = localStorage.getItem("studentForm");

    if (saved) {
      setData(JSON.parse(saved));
    }
  }
}, []);

  if (!data) {
    return <h2>No Data Found</h2>;
  }

  const handleChoose = ()=> {
    if(!color){
      alert("Please select payment method!");
      return;
    }
    if(color==="visa" ||color==="master"){
      navigate("/carddetails", {state:{method:color,user:data}});
    }
    else{
      navigate("/walletdetails",{state:{method:color,user:data}});
    }
  }

  return (
    <div>
      <div className="column">
        <h2>
          <i className="fa-solid fa-graduation-cap"></i> Student Registration
          System
        </h2>
        <div className="navs">
          <li onClick={() => navigate("/")}><i class="fa-solid fa-house"></i></li>
          <li onClick={() => navigate("/register")}>Back</li>
        </div>
      </div>
      <div className="payment-page">
        <form>
          <h2>Select Payment Method</h2>
          <div className="payment-grid">
            <img src="/visa.jpg" alt="Visa" onClick={() => setColor("visa")}
              className={color === "visa" ? "active" : ""}/>
            <img src="/master.svg" alt="Mastercard"  onClick={() => setColor("master")}
              className={color === "master" ? "active" : ""}/>
            <img src="/kbs.png" alt="KBZ Pay"  onClick={() => setColor("kbz")}
              className={color === "kbz" ? "active" : ""}/>
            <img src="/aya.png" alt="AYA Pay"   onClick={() => setColor("aya")}
              className={color === "aya" ? "active" : ""}/>
            <img src="/uab.png" alt="UAB Pay"  onClick={() => setColor("uab")}
              className={color === "uab" ? "active" : ""}/>
            <img src="/wave.jpg" alt="Wave Pay"  onClick={() => setColor("wave")}
              className={color === "wave" ? "active" : ""}/>
          </div>
          <button type="button" onClick={handleChoose}>Choose</button>
        </form>
      </div>
    </div>
  );
};

export default Payment;

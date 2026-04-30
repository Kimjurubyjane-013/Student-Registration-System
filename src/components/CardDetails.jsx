import React, { useState } from "react";
import "./Home.css";
import { useLocation, useNavigate } from "react-router-dom";

const CardDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const method = location.state?.method;
  const [loading,setLoading] = useState(false);
  const data = {
    visa: {
      logo: "/visa.jpg",
      title: "Visa Card",
    },
    master: {
      logo: "/master.svg",
      title: "Master Card",
    }
  };

  const handlePay = (e)=> {
      e.preventDefault();
      setLoading(true);
      setTimeout(()=>{
        localStorage.setItem("paymentStatus", "success");
        navigate("/success");
      },2500);
  }
  const item = data[method];

  return (
    <div>
      <div className="column">
        <h2>
          <i className="fa-solid fa-graduation-cap"></i> Student Registration
          System
        </h2>
        <div className="navs">
          <li onClick={() => navigate("/")}><i class="fa-solid fa-house"></i></li>
          <li onClick={() => navigate("/payment")}>Payment</li>
        </div>
      </div>
        <div className="payment-container">
            <div className="payment-box">
                <form onSubmit={handlePay}>
                  <h2>{item.title} Payment Details</h2>
                <div className="card-logo">
                    <img src={item.logo} alt=""/>
                </div>
                    <label>CARD NUMBER</label>
                    <div className="card-input">
                        <input type="text" plaeholder="Valid Card Nuumber" required/>
                        <span>
                            <i className="fa-solid fa-credit-card"></i>
                        </span>
                    </div>
                    <div className="row">
                        <div>
                            <label>EXPIRATION DATE</label>
                            <input type="text" placeholder="MM /YY" required/>
                        </div>
                        <div>
                            <label>CV CODE</label>
                            <input type="text" placeholder="CVC" required/>
                        </div>
                    </div>
                    <label>CARD OWNER</label>
                    <input type="text" placeholder='Card Owner Name' required/>
                    <button type="submit" disabled={loading}>
                      {loading ?(
                        <>
                        <span className="loader"></span>Processing...</>
                      ):(
                        "Pay Now"
                      )}
                    </button>
                </form>
            </div>
        </div>
    </div>
  );
};

export default CardDetails;

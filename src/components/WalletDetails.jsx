import React,{useState} from "react";
import "./Home.css";
import { useLocation, useNavigate } from "react-router-dom";

const WalletDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const method = location.state?.method;
  const [loading, setLoading] = useState(false);
  const data = {
    kbz: {
      logo: "/kbs.png",
      title: "KBZ Pay",
    },

    aya: {
      logo: "/aya.png",
      title: "AYA Pay",
    },

    uab: {
      logo: "/uab.png",
      title: "UAB Pay",
    },

    wave: {
      logo: "/wave.jpg",
      title: "Wave Money",
    },
  };

  const handlePay = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      localStorage.setItem("paymentStatus", "success");
      navigate("/success");
    }, 2500);
  };

  const item = data[method];

  return (
    <div>
      <div className="column">
        <h2>
          <i className="fa-solid fa-graduation-cap"></i> Student Registration
          System
        </h2>
        <div className="navs">
          <li onClick={() => navigate("/")}>
            <i class="fa-solid fa-house"></i>
          </li>
          <li onClick={() => navigate("/payment")}>Payment</li>
        </div>
      </div>
      <div className="payment-container">
        <div className="payment-box">
          <form onSubmit={handlePay}>
            <h2>{item.title} Payment Details</h2>
            <div className="card-logo">
              <img src={item.logo} alt="" />
            </div>
            <label>USER ID</label>
            <div className="card-input">
              <input type="text" plaeholder="Valid Card Nuumber" required />
              <span>
                <i class="fa-brands fa-amazon-pay"></i>
              </span>
            </div>
            <label>FULL NAME</label>
            <input type="text" placeholder="" required />
            <label>AMOUNT</label>
            <input type="text" placeholder="" required />
            <div className="row">
              <div>
                <label>NOTE</label>
                <input type="text" placeholder="Enter something..." required />
              </div>
              <div>
                <label>Option</label>
                <select>
                  <option value="Payment">Payment</option>
                  <option value="Promotion">Promotion</option>
                  <option value="Others">Others</option>
                </select>
              </div>
            </div>
            <button type="submit" disabled={loading}>
              {loading ? (
                <>
                  <span className="loader"></span>Processing...
                </>
              ) : (
                "Pay Now"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default WalletDetails;

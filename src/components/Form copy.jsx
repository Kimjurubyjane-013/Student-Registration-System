import React, { useState } from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";
import { useEffect } from "react";

const Form = () => {
  const navigate = useNavigate();


  const emptyForm = {
  name: "",
  rollNo: "",
  fatherName: "",
  dob: "",
  gender: "",
  email: "",
  password: "",
  address: "",
  phone: "",
};

  const [form, setForm] = useState(() => {

    const submitted = localStorage.getItem("submitted");

  if (submitted === "true") {
    localStorage.removeItem("studentForm");
    localStorage.removeItem("submitted");
    return emptyForm;
  }

  const saved = localStorage.getItem("studentForm");
  return saved ? JSON.parse(saved) : emptyForm;
});

  useEffect(() => {
    localStorage.setItem("studentForm", JSON.stringify(form));
  }, [form]);

  const handleChange = (e) => {
  const { name, value } = e.target;

  setForm((prev) => ({
    ...prev,
    [name]: value,
  }));
};
  const handleSubmit = (e) => {
  e.preventDefault();

  // mark as submitted
  localStorage.setItem("submitted", "true");

  navigate("/payment", { state: form });

  setForm(emptyForm);
};

  return (
    <div className="form-container">
      <div className="column">
        <h2>
          <i className="fa-solid fa-graduation-cap"></i> Student Registration
          System
        </h2>
        <li onClick={() => navigate("/")}>
          <i class="fa-solid fa-house"></i>
        </li>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>
            <i class="fa-solid fa-person"></i> Name
            <i class="fa-regular fa-asterisk"></i>
          </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter Name"
            pattern="[A-Za-z\s]+"
            title="Only Letters Allowed!"
            required
          />
        </div>

        <div className="form-group">
          <label>
            <i class="fa-solid fa-address-card"></i> Roll No
            <i class="fa-regular fa-asterisk"></i>
          </label>
          <input
            type="text"
            name="rollNo"
            value={form.rollNo}
            onChange={handleChange}
            placeholder="Enter Roll No"
            pattern="[0-9]+"
            title="Only Numbers Allowed"
            required
          />
        </div>

        <div className="form-group">
          <label>
            <i class="fa-solid fa-circle-user"></i> Father's Name
          </label>
          <input
            type="text"
            name="fatherName"
            value={form.fatherName}
            onChange={handleChange}
            placeholder="Enter Father Name"
            pattern="[A-Za-z\s]+"
            title="Only Letters Allowed!"
            required
          />
        </div>

        <div className="form-group">
          <label>
            <i class="fa-solid fa-cake-candles"></i> Date of Birth
            <i class="fa-regular fa-asterisk"></i>
          </label>
          <input
            type="date"
            name="dob"
            value={form.dob}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>
            <i class="fa-solid fa-mars"></i> Gender
          </label>
          <div className="gender" required>
            <label>
              <input
                type="radio"
                name="gender"
                value="male"
                checked={form.gender === "male"}
                onChange={handleChange}
              />{" "}
              Male
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="female"
                checked={form.gender === "female"}
                onChange={handleChange}
              />{" "}
              Female
            </label>
          </div>
        </div>

        <div className="form-group">
          <label>
            <i class="fa-solid fa-at"></i> Email
            <i class="fa-regular fa-asterisk"></i>
          </label>
          <input
            type="email"
            placeholder="Enter Email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>
            <i class="fa-solid fa-lock"></i> Password
            <i class="fa-regular fa-asterisk"></i>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            value={form.password}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>
            <i class="fa-solid fa-phone"></i> Phone
          </label>
          <PhoneInput
            country={"mm"}
            value={form.phone || ""}
            onChange={(value) =>
              setForm((prev) => ({
                ...prev,
                phone: value,
              }))
            }
            enableSearch={true}
            inputStyle={{
              width: "100%",
              height: "40px",
            }}
            containerStyle={{
              width: "100%",
            }}
          />
        </div>

        <div className="form-group">
          <label>
            <i class="fa-solid fa-house"></i> Address
          </label>
          <textarea
            placeholder="Enter Address"
            name="address"
            value={form.address}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <button type="submit">Next</button>
      </form>
    </div>
  );
};

export default Form;

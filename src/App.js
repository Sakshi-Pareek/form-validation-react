import './App.css';
import React, { useState } from "react";


function App() {
  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    email: "",
    message: "",
    number: "",
    password: "",
    confirmPassword: ""
  });
  const [formErrors, setFormErrors] = useState({
    name: "",
    lastname: "",
    email: "",
    message: "",
    number: "",
    password: "",
    confirmPassword: ""
  });
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  if (showSuccessPopup === true) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const regex = {
      name: /^[a-zA-Z\s]+$/,
      lastname: /^[a-zA-Z\s]+$/,
      email: /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/,
      message: /^[a-zA-Z\s]+$/,
      number: /^\d{10}$/,
      password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@])[a-zA-Z\d@]{8,}$/,
      confirmPassword:
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@])[a-zA-Z\d@]{8,}$/,
    };
    const errors = {};
    if (!regex.name.test(formData.name)) {
      errors.name = "name is invalid.";
    }
    if (!regex.lastname.test(formData.lastname)) {
      errors.lastname = "lastname is invalid.";
    }
    if (!regex.message.test(formData.message)) {
      errors.message = "message is invalid.";
    }
    if (!regex.email.test(formData.email)) {
      errors.email = "Email is invalid.";
    }
    if (!regex.number.test(formData.number)) {
      errors.number = "Number is invalid.";
    }
    if (!regex.password.test(formData.password)) {
      errors.password = "Password is invalid.";
    }
    if (!regex.confirmPassword.test(formData.confirmPassword)) {
      errors.confirmPassword = "Confirm password is invalid.";
    }
    if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = "Passwords do not match.";
    }

    setFormErrors(errors);
    if (Object.keys(errors).length === 0) {
      setShowSuccessPopup(true);
    }
  };
  const handlePopupClose = () => {
    setShowSuccessPopup(false);
    setFormData({
      name: "",
      lastname: "",
      email: "",
      message: "",
      number: "",
      password: "",
      confirmPassword: ""
    });
    setFormErrors({
      name: "",
      lastname: "",
      email: "",
      message: "",
      number: "",
      password: "",
      confirmPassword: ""
    });
  };
  return (
    <div className="max-w-[800px] mx-auto">
      <h1 className='text-black font-bold text-center text-5xl my-5'>Form Validation</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-2'>
        <div className="md:flex items-center justify-between gap-10">
          <div className="form-group w-full">
            <label
              className="font-normal text-[#131200] text-[16px] opacity-[70%]"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="outline-none border-solid border-[1px] border-[#13120033] p-[11px] w-full rounded-[5px]"
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            {formErrors.name && (
              <p className="error-message">{formErrors.name}</p>
            )}
          </div>
          <div className="form-group w-full">
            <label
              className="font-normal text-[#131200] text-[16px] opacity-[70%]"
              htmlFor="lastname"
            >
              Lastname
            </label>
            <input
              className="outline-none border-solid border-[1px] border-[#13120033] p-[11px] w-full rounded-[5px]"
              type="text"
              id="lastname"
              name="lastname"
              value={formData.lastname}
              onChange={handleChange}
            />
            {formErrors.lastname && (
              <p className="error-message">{formErrors.lastname}</p>
            )}
          </div>
        </div>
        <div className="form-group">
          <label
            className="font-normal text-[#131200] text-[16px] opacity-[70%]"
            htmlFor="number"
          >
            Number
          </label>
          <input
            className="outline-none border-solid border-[1px] border-[#13120033] p-[11px] w-full rounded-[5px]"
            type="number"
            id="number"
            name="number"
            value={formData.number}
            onChange={handleChange}
          />
          {formErrors.number && (
            <p className="error-message">{formErrors.number}</p>
          )}
        </div>
        <div className="form-group">
          <label
            className="font-normal text-[#131200] text-[16px] opacity-[70%]"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="outline-none border-solid border-[1px] border-[#13120033] p-[11px] w-full rounded-[5px]"
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {formErrors.email && (
            <p className="error-message">{formErrors.email}</p>
          )}
        </div>
        <div className="form-group w-full">
          <label
            className="font-normal text-[#131200] text-[16px] opacity-[70%]"
            htmlFor="lastname"
          >
            Message
          </label>
          <textarea
            className="outline-none border-solid border-[1px] border-[#13120033] w-full p-[11px] rounded-[5px] resize-none"
            type="text"
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
          {formErrors.message && (
            <p className="error-message">{formErrors.message}</p>
          )}
        </div>
        <div className="md:flex items-center justify-between gap-10">
          <div className="form-group w-full">
            <label
              className="font-normal text-[#131200] text-[16px] opacity-[70%]"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="outline-none border-solid border-[1px] border-[#13120033] p-[11px] w-full rounded-[5px]"
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            {formErrors.password && (
              <p className="error-message">{formErrors.password}</p>
            )}
          </div>
          <div className="form-group w-full">
            <label
              className="font-normal text-[#131200] text-[16px] opacity-[70%]"
              htmlFor="confirmPassword"
            >
              ConfirmPassword
            </label>
            <input
              className="outline-none border-solid border-[1px] border-[#13120033] p-[11px] w-full rounded-[5px]"
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            {formErrors.confirmPassword && (
              <p className="error-message">{formErrors.confirmPassword}</p>
            )}
          </div>
        </div>
        <div className="flex lg:justify-start justify-center items-center mt-[10px]">
          <button className="py-3.5 px-6 rounded-md bg-black text-white text-center" >Submit</button>
        </div>
      </form>
      {showSuccessPopup && (
        <div className="success-popup">
          <div className="success-popup-box">
            <p className="mb-[10px]">Your form submitted successfully!</p>
            <button onClick={handlePopupClose}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

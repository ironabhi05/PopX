import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { CreateAccount } from "../Components/Buttons";

const SigninPage = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    name: "",
    contact: "",
    email: "",
    password: "",
    company: "",
    agency: "",
  });

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const signin = () => {
    localStorage.setItem("user", JSON.stringify(userData));
    alert("User Created successfully");
    setUserData({
      name: "",
      contact: "",
      email: "",
      password: "",
      company: "",
      agency: "",
    });
    navigate("/dashboard");
  };
  return (
    <Container>
      <div className="signin">
        <div className="heading">
          <p>
            Create your <br />
            PopX account
          </p>
        </div>
        <form className="form-content" onSubmit={signin}>
          <div className="input-box">
            <label htmlFor="name" className="text">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              name="name"
              value={userData.name}
              onChange={handleChange}
              className="input"
              required
            />
          </div>
          <div className="input-box">
            <label htmlFor="contact" className="text">
              Contact Number
            </label>
            <input
              type="number"
              placeholder="Enter your contact number"
              name="contact"
              value={userData.contact}
              onChange={handleChange}
              className="input"
              required
            />
          </div>
          <div className="input-box">
            <label htmlFor="email" className="text">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter email address"
              name="email"
              value={userData.email}
              onChange={handleChange}
              className="input"
              required
            />
          </div>
          <div className="input-box">
            <label htmlFor="password" className="text">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter password"
              name="password"
              value={userData.password}
              onChange={handleChange}
              className="input"
              required
            />
          </div>
          <div className="input-box">
            <label htmlFor="company" className="text">
              Company Name
            </label>
            <input
              type="text"
              placeholder="Enter your company name"
              name="company"
              value={userData.company}
              onChange={handleChange}
              className="input"
              required
            />
          </div>
          <div className="checkbox">
            <p>Are you an Agency?</p>
            <label className="mr-4">
              <input
                type="radio"
                name="agency"
                checked={userData.agency === "Yes"}
                value="Yes"
                onChange={handleChange}
              />{" "}
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="agency"
                checked={userData.agency === "No"}
                value="No"
                onChange={handleChange}
              />{" "}
              No
            </label>
          </div>
          <div className="form-btn">
            <CreateAccount />
          </div>
        </form>
      </div>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #ffffff;
  .signin {
    height: 98%;
    background-color: #f7f8f9;
    padding: 20px;
    width: 400px;
    display: flex;
    flex-direction: column;
    border: 1px solid rgb(231, 227, 227);

    @media (max-width: 480px) {
      width: 100%;
      height: 100%;
      padding: 25px;
    }
  }

  .heading p {
    font-size: 1.5em;
    font-weight: 700;

    @media (max-width: 480px) {
      font-size: 2em;
    }
  }
  .form-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .input-box {
    display: flex;
    flex-direction: column;
    width: 100%;
    position: static;
  }

  .input-box label.text {
    font-size: 0.7rem;
    color: #818cf8;
    font-weight: 700;
    position: relative;
    top: 0.5rem;
    margin: 0 0 0 7px;
    padding: 0 3px;
    background: #f7f8f9;
    width: fit-content;
  }

  .input-box input.input {
    padding: 11px 10px;
    font-size: 0.8rem;
    border: 2px #d0caca solid;
    border-radius: 5px;
    background: #f7f8f9;
  }

  .input-box input.input:focus {
    outline: none;
  }
  .checkbox p {
    margin-top: 10px;
    font-weight: 500;
    font-size: 0.9rem;
  }
  .form-btn {
    margin-top: auto;
  }
`;
export default SigninPage;

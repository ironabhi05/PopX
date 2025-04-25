import React, { useState } from "react";
import styled from "styled-components";
import { LoginBtn } from "../Components/Buttons";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const login = () => {
    const userExist = JSON.parse(localStorage.getItem("user"));
    if (
      userExist.email === user.email &&
      userExist.password === user.password
    ) {
      alert("Login Successful!");
      setUser({
        email: "",
        password: "",
      });
      navigate("/user-dashboard");
    } else {
      setError("invalid User or password");
    }
  };

  return (
    <Container>
      <div className="login">
        <div className="heading">
          <p>
            Signin to your <br />
            PopX account
          </p>
        </div>
        <div className="description">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        {error && <p>{error}</p>}
        <form onSubmit={login}>
          <div className="input-box">
            <label htmlFor="email" className="text">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter email address"
              name="email"
              className="input"
              value={user.email}
              onChange={handleChange}
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
              className="input"
              value={user.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-btn mt-4 ">
            <LoginBtn name={"Login"} />
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
  .login {
    height: 98%;
    background-color: #f7f8f9;
    padding: 20px;
    width: 400px;
    border: 1px solid rgb(231, 227, 227);

    @media (max-width: 480px) {
      width: 100%;
      height: 100%;
      padding: 25px;
    }
  }

  .heading p {
    font-size: 2em;
    font-weight: 700;
    margin-bottom: 10px;

    @media (max-width: 480px) {
      font-size: 1.9em;
    }
  }
  .description p {
    font-weight: 400;
    font-size: 1.2em;
    color: gray;

    @media (max-width: 480px) {
      font-size: 1.1em;
    }
  }
  .input-box {
    display: flex;
    flex-direction: column;
    width: 100%;
    position: static;
  }

  .input-box label.text {
    font-size: 0.9rem;
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
    font-size: 1rem;
    border: 2px #d0caca solid;
    border-radius: 5px;
    background: #f7f8f9;
  }

  .input-box input.input:focus {
    outline: none;
  }
`;
export default Login;

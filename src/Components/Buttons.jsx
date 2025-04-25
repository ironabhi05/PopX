import React from "react";
import styled from "styled-components";

export const CreateAccount = () => {
  return (
    <StyledWrapper>
      <button className="custom-btn btn-1">Create Account</button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .custom-btn {
    width: 100%;
    height: 40px;
    color: #fff;
    border-radius: 5px;
    padding: 10px 25px;
    font-family: "Lato", sans-serif;
    font-weight: 700;
    background: transparent;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    display: inline-block;
    outline: none;
  }

  .btn-1 {
    background: #818cf8;
    border: none;
  }

  .btn-1:before {
    height: 0%;
    width: 2px;
  }
`;

export const LoginBtn = ({ name }) => {
  return (
    <StyledWrapperLogin>
      <button className="custom-btn btn-1">{name}</button>
    </StyledWrapperLogin>
  );
};

const StyledWrapperLogin = styled.div`
  .custom-btn {
    width: 100%;
    height: 40px;
    color: black;
    border-radius: 5px;
    padding: 10px 25px;
    font-family: "Lato", sans-serif;
    font-weight: 700;
    background: transparent;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    display: inline-block;
    outline: none;
  }

  .btn-1 {
    background: #cbcbcb;
    border: none;
  }

  .btn-1:before {
    height: 0%;
    width: 2px;
  }
`;

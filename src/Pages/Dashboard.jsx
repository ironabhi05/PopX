import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { CreateAccount, LoginBtn } from "../Components/Buttons";

function Dashboard() {
  return (
    <Container>
      <div className="dashboard">
        <div className="content">
          <div className="heading">
            <p>Welcome To PopX</p>
          </div>
          <div className="description">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="btns">
            <NavLink to={"/signin"}>
              <CreateAccount />
            </NavLink>
            <NavLink to={"/login"}>
              <LoginBtn name={"Already Registered? Login"} />
            </NavLink>
          </div>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #ffffff;

  .dashboard {
    background-color: #f7f8f9;
    width: 400px;
    height: 98%;
    border: 1px solid #e7e3e3;
    display: flex;
    align-items: flex-end;
    justify-content: center;

    @media (max-width: 480px) {
      width: 100%;
      height: 100%;
    }

    .content {
      width: 100%;
      padding: 20px;
      display: flex;
      flex-direction: column;
      gap: 15px;

      @media (max-width: 480px) {
        padding: 20px 15px;
        gap: 12px;
      }
    }

    .heading p {
      font-size: 2em;
      font-weight: 600;

      @media (max-width: 480px) {
        font-size: 1.6em;
      }
    }

    .description p {
      font-weight: 400;
      font-size: 1.1em;
      color: gray;

      @media (max-width: 480px) {
        font-size: 0.9em;
      }
    }

    .btns {
      display: flex;
      flex-direction: column;
      gap: 10px;

      button {
        width: 100%;
      }
    }
  }
`;

export default Dashboard;

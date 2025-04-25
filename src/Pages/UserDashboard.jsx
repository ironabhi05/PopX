import React from "react";
import styled from "styled-components";
import { FaCamera } from "react-icons/fa";

const UserDashboard = () => {
  const storedUser = localStorage.getItem("user");
  const user = storedUser ? JSON.parse(storedUser) : null;
  return (
    <>
      <Container>
        <div className="user-dashboard">
          <div className="nav">
            <p>Account Setting</p>
          </div>

          <div className="user-profile">
            <div className="user-picture">
              <img
                src="https://png.pngtree.com/png-clipart/20231019/original/pngtree-user-profile-avatar-png-image_13369988.png"
                alt="Profile"
              />
              <div className="camera-icon">
                <FaCamera />
              </div>
            </div>
            <div className="user-info">
              <h4>{user.name}</h4>
              <p className="email">{user.email}</p>
            </div>
          </div>

          <div className="user-bio">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Quibusdam hic voluptatem at architecto fugiat autem omnis, maiores
              commodi, similique saepe, vero consequatur porro placeat iusto
              tenetur illum distinctio deserunt recusandae!
            </p>
            <hr />
          </div>
        </div>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #ffffff;

  .user-dashboard {
    background-color: #f7f8f9;
    width: 400px;
    height: 98%;
    border: 1px solid #e7e3e3;

    @media (max-width: 480px) {
      width: 100%;
      height: 100%;
    }

    .nav {
      background-color: white;
      height: 10%;
      padding: 15px;

      p {
        font-weight: 700;
        color: black;
        font-size: 1.2rem;

        @media (max-width: 480px) {
          font-size: 1.7rem;
          margin-top: 10px;
        }
      }
    }

    .user-profile {
      padding: 10px;
      display: flex;
      align-items: center;
      justify-content: flex-start;

      .user-picture {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        overflow: hidden;
        margin-right: 15px;
        position: relative;
        border: 1px solid #e7e3e3;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .camera-icon {
          position: absolute;
          bottom: 10px;
          right: 10px;
          background: #818cf8;
          color: white;
          border-radius: 50%;
          padding: 5px;
          font-size: 0.8rem;
          border: 2px solid white;
          cursor: pointer;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
        }
      }

      .user-info {
        h4 {
          margin: 0;
          font-size: 1rem;
          font-weight: 600;

          @media (max-width: 480px) {
            font-size: 0.95rem;
          }
        }

        .email {
          margin: 2px 0 0;
          font-size: 0.85rem;
          color: gray;

          @media (max-width: 480px) {
            font-size: 0.8rem;
          }
        }
      }
    }

    .user-bio {
      padding: 0 15px;
      justify-content: space-between;
      @media (max-width: 480px) {
        padding: 10px 20px;
      }

      p {
        font-size: 0.85rem;
        color: #555;
        margin-top: 5px;

        @media (max-width: 480px) {
          font-size: 0.8rem;
        }
      }
    }
    hr {
      margin-top: 10px;
      border: 1px dashed #e7e3e3;
    }
  }
`;

export default UserDashboard;

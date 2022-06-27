import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import "../../css/typography.css";

export default function Sidebar({ isOpen }) {
  return (
    <ASide isOpen={isOpen}>
      <div className="side-logo">
        <StaticImage src="../../assets/svgs/AppLogo.svg" alt="App Logo" />
        <p className="sora">Sora</p>
      </div>
      <div className="side-content">
        <div className="side-menu">
          <Link
            to="/dashboard"
            className="side-menu-item"
            activeClassName="active"
          >
            <StaticImage
              src="../../assets/svgs/Menu.svg"
              alt="Dashboard"
              className="icon"
            />
            <p isOpen={isOpen}>Dashboard</p>
          </Link>
          <Link
            to="/profile"
            className="side-menu-item"
            activeClassName="active"
          >
            <StaticImage
              src="../../assets/svgs/Account.svg"
              alt="Account"
              className="icon"
            />
            <p isOpen={isOpen}>Profile</p>
          </Link>
        </div>
        <Link to="/logout" className="side-menu-item" activeClassName="active">
          <StaticImage
            src="../../assets/svgs/Logout.svg"
            alt="Logout"
            className="icon"
          />
          <p isOpen={isOpen}>Sign Out</p>
        </Link>
      </div>
      <div className="footer">
        <p isOpen={isOpen}>© 2022 Syrona Health. All rights reserved.</p>
        <span>
          <StaticImage src="../../assets/svgs/syrona.svg" alt="App Logo" />
        </span>
      </div>
    </ASide>
  );
}

const ASide = styled.div`
  box-shadow: 0px 2px 4px 2px #b5b5b5;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  border-right: 1px solid rgba(82, 82, 82, 0.4);
  overflow: hidden;
  transition: all 0.5s ease;
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ${(props) =>
    props.isOpen
      ? `
    width:280px;
    `
      : `
    width:80px;
    `}
  .side-content {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .side-logo {
    display: flex;
    align-items: center;
    padding: 1.4rem;
    .sora {
      text-transform: uppercase;
      font-family: NunitoSans-Bold;
      color: ${({ theme: { colors } }) => colors.primary};
      font-size: 1.3rem;
      margin-left: 0.5rem;
      ${(props) => (props.isOpen ? null : `display:none`)}
    }
  }

  .side-menu {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .side-menu-item {
    display: flex;
    text-decoration: none;
    align-items: center;
    color: ${({ theme: { colors } }) => colors.primaryDark};

    p {
      font-family: NunitoSans;
      font-size: 1rem;
      margin-left: 0.7rem;
      padding: 1.4rem 0;
      ${(props) => (props.isOpen ? null : `display:none`)}
    }
    .icon {
      margin-left: 1.4rem;
      ${(props) => (props.isOpen ? null : `margin: 1.4rem`)}
    }
  }
  .active {
    font-weight: bold;
    background-color: ${({ theme: { colors } }) => colors.lightGray3};
  }
  .footer {
    background-color: ${({ theme: { colors } }) => colors.lightGray3};
    height: 3rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    p {
      font-size: 0.7rem;
      font-family: NunitoSans;
      margin-left: 0.6rem;
      ${(props) => (props.isOpen ? null : `display: none`)}
    }
    span {
      height: 100%;
      padding: 0 0.5rem;
      border-radius: 0.5rem 0 0 0;
      background-color: ${({ theme: { colors } }) => colors.primary};
      display: flex;
      align-items: center;
      justify-content: center;

      ${(props) =>
        props.isOpen
          ? `border-radius: 0.5rem 0 0 0`
          : `border-radius: 0; width: 100%;`}
    }
  }
`;

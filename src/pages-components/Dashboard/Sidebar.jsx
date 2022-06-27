import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { RiDashboardLine } from "react-icons/ri";
import "../../css/typography.css";

export default function Sidebar({ isOpen }) {

  return (
    <ASide isOpen={isOpen}>
      <div className="side-logo">
        <StaticImage src="../../assets/svgs/AppLogo.svg" alt="App Logo" />
        <p className="sora">Sora</p>
      </div>
      <div className="side-menu">
        <Link
          to="/dashboard"
          className="side-menu-item"
          activeClassName="active"
        >
          <RiDashboardLine />
          <p>Dashboard</p>
        </Link>
        <Link to="/profile" className="side-menu-item" activeClassName="active">
          <RiDashboardLine />
          <p>Profile</p>
        </Link>
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
  padding: 1.4rem;
  overflow: hidden;
  transition: all 0.5s ease;
  z-index: 10;
  ${(props) =>
    props.isOpen
      ? `
    width:280px;
    `
      : `
    width:80px;
    `}

  .side-logo {
    display: flex;
    align-items: center;
    .sora {
      text-transform: uppercase;
      font-family: NunitoSans-Bold;
      color: ${({ theme: { colors } }) => colors.primary};
      font-size: 1.3rem;
      margin-left: 0.5rem;
      ${(props) => (props.isOpen ? null : `display:none`)}
    }
  }

  .side-menu .side-menu-item {
    display: flex;
    text-decoration: none;
    color: ${({ theme: { colors } }) => colors.primaryDark};
  }
  .active {
    background-color: red;
  }
`;

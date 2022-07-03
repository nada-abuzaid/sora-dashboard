import React from "react";
import styled from "styled-components";
import { RiMenu2Line } from "react-icons/ri";
import PropTypes from "prop-types";

export default function Header({ isOpen, setisOpen }) {
  return (
    <Nav isOpen={isOpen}>
      <RiMenu2Line
        className="menu-icon"
        onClick={() => {
          setisOpen(!isOpen);
        }}
      />
    </Nav>
  );
}

const Nav = styled.nav`
  position: fixed;
  width: 100%;
  height: 3.4rem;
  display: flex;
  align-items: center;
  box-shadow: 2px 2px 4px #b5b5b5;
  background-color: white;
  z-index: 11;
  .menu-icon {
    font-size: 1.5rem;
    margin-left: 1rem;
    font-weight: normal;
    cursor: pointer;
  }
`;

Header.propTypes = {
  /**
   * If the sidebar is open or not
   */
  isOpen: PropTypes.bool,
  /**
   * Set the sidebar state
   */
  setisOpen: PropTypes.bool,
};

Header.defaultProps = {
  isOpen: true,
  setisOpen: true,
};

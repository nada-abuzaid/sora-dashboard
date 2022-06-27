import React from "react";
import styled from "styled-components";
import { RiMenu2Line } from "react-icons/ri";

export default function Header({ isOpen, setIsOpen }) {
  return (
    <Nav isOpen={isOpen}>
      <RiMenu2Line
        className="menu-icon"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      />
    </Nav>
  );
}
const Nav = styled.nav`
  height: 3.4rem;
  display: flex;
  align-items: center;
  box-shadow: 2px 2px 4px #b5b5b5;

  .menu-icon {
    font-size: 1.5rem;
    margin-left: 1rem;
    font-weight: normal;
  }
`;

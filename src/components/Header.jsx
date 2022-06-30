import React from "react";
import Logo from "../assets/svgs/Logo.svg";
import styled from "styled-components";

export const Header = () => (
  <header>
    <Div>
      <img className="logo-img" src={Logo} alt="Logo Img" />
    </Div>
  </header>
);

const Div = styled.div`
  height: 3.4rem;
  display: flex;
  align-items: center;
  box-shadow: 2px 2px 4px #b5b5b5;
  .logo-img {
    width: 6rem;
    margin-left: 1rem;
  }
`;

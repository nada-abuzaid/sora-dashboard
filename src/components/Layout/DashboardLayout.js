import React, { useState } from "react";
import styled from "styled-components";
import Header from "../../pages-components/Dashboard/Header";
import Sidebar from "../../pages-components/Dashboard/Sidebar";
export default function DashboardLayout({ children }) {
  const [isOpen, setisOpen] = useState(true);
  return (
    <Wrapper className="page-continer" isOpen={isOpen}>
      <div className="main-page">
        <Header isOpen={isOpen} setisOpen={setisOpen} />
        <div className="main-content">{children}</div>
      </div>
      <Sidebar isOpen={isOpen} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;

  .main-page {
    display: flex;
    flex-direction: column;
    ${({ isOpen, theme: { sizes } }) => {
      return isOpen
        ? `margin-left: ${sizes.MENU_WIDTH}px;`
        : `
 margin-left: ${sizes.COLLAPSED_MENU_WIDTH}px;
  `;
    }}
    transition: all 0.5s ease;
  }
`;

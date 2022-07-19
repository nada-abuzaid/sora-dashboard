import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '../../pages-components/Dashboard/DashHeader';
import Sidebar from '../../pages-components/Dashboard/Sidebar';

export default function DashboardLayout({ children }) {
  const [isOpen, setisOpen] = useState(true);
  return (
    <Wrapper className='page-continer' isOpen={isOpen}>
      <div className='main-page'>
        <Header isOpen={isOpen} setisOpen={setisOpen} />
        <div className='main-content'>{children}</div>
      </div>
      <Sidebar isOpen={isOpen} setisOpen={setisOpen} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #fbfbfb;
  .main-page {
    display: flex;
    flex-direction: column;
    height: 100vh;
    ${({ isOpen, theme: { sizes } }) => {
      return isOpen
        ? `margin-left: ${sizes.MENU_WIDTH}px;`
        : `
 margin-left: ${sizes.COLLAPSED_MENU_WIDTH}px;
  `;
    }}
    transition: all 0.5s ease;
  }
  .main-content {
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 4rem;
    gap: 2rem;
    .chart :nth-child(3) {
      width: 100%;
    }
  }

  @media only screen and (max-width: 600px) {
    .main-page {
      margin-left: 0px;
      p {
        text-align: center;
      }
    }
  }
`;

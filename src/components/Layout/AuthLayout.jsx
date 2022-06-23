import React from 'react';
import Header from '../Header';
import styled from 'styled-components';
import RightSide from '../RightSide';
import '../../styles/style.css';

export default function AuthLayout({ children }) {
  return (
    <div>
      <Header />
      <Div>
        {children}
        <RightSide />
      </Div>
    </div>
  );
}

const Div = styled.div`
  display: flex;
  flex-direction: row;
  height: calc(100%-3.6rem);
`;
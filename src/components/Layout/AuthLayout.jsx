import React from 'react';
import styled from 'styled-components';
import { RightSide } from '../../pages-components';
import { Header } from '../Header';
 
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

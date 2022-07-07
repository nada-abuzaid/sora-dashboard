import React from 'react';
import Header from '../Header';
import styled from 'styled-components';
import { RightPanel } from '../../pages-components';

export default function AuthLayout({ children }) {
  return (
    <div>
      <Header />
      <Div>
        <div className='main'>{children}</div>
        <RightPanel />
      </Div>
    </div>
  );
}

const Div = styled.div`
  display: flex;
  flex-direction: row;
  height: calc(100%-3.6rem);
  .main {
    width: 50%;
  }
`;

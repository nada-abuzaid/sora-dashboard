import React from 'react';
import Header from '../Header';
import { RightPanel } from '../../pagesComponents';
import { Main } from '../styled/LayoutStyles';

export default function AuthLayout({ children }) {
  return (
    <div>
      <Header />
      <Main>
        <div className='main'>{children}</div>
        <RightPanel />
      </Main>
    </div>
  );
}

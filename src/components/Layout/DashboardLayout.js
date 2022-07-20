import React, { useState } from 'react';
import Header from '../../pagesComponents/Dashboard/DashHeader';
import Sidebar from '../../pagesComponents/Dashboard/Sidebar';
import { DashboardWrapper } from '../styled/LayoutStyles';

export default function DashboardLayout({ children }) {
  const [isOpen, setisOpen] = useState(true);
  return (
    <DashboardWrapper className='page-continer' isOpen={isOpen}>
      <div className='main-page'>
        <Header isOpen={isOpen} setisOpen={setisOpen} />
        <div className='main-content'>{children}</div>
      </div>
      <Sidebar isOpen={isOpen} setisOpen={setisOpen} />
    </DashboardWrapper>
  );
}

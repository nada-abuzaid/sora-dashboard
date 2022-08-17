import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { DashboardWrapper } from '../components/styled/LayoutStyles';
import Sidebar from '../pagesComponents/Dashboard/Sidebar';
import Header from '../pagesComponents/Dashboard/DashHeader';

export default function DashboardLayout() {
  const [isOpen, setisOpen] = useState(true);
  return (
    <DashboardWrapper className="page-continer" isOpen={isOpen}>
      <div className="main-page">
        <Header isOpen={isOpen} setisOpen={setisOpen} />
        <div className="main-content">
          <Outlet />
        </div>
      </div>
      <Sidebar isOpen={isOpen} setisOpen={setisOpen} />
    </DashboardWrapper>
  );
}

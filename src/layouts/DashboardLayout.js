import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { DashboardWrapper } from '../components/styled/LayoutStyles';
import Sidebar from '../components/Dashboard/Sidebar';
import Header from '../components/Dashboard/DashHeader';
import Subsecribe from '../components/Dashboard/Subsecribe/Subsecribe';

export default function DashboardLayout() {
  const [isOpen, setisOpen] = useState(true);
  const { open } = useSelector((state) => state.upgrade.value);
  return (
    <DashboardWrapper className="page-continer" isOpen={isOpen}>
      <div className="main-page">
        <Header isOpen={isOpen} setisOpen={setisOpen} />
        <div className="main-content">
          {open && <Subsecribe />}
          <Outlet />
        </div>
      </div>
      <Sidebar isOpen={isOpen} setisOpen={setisOpen} />
    </DashboardWrapper>
  );
}

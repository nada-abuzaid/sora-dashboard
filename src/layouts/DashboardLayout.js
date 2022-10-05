import React from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { DashboardWrapper } from './styles';
import Sidebar from '../components/Dashboard/Sidebar';
import Header from '../components/Dashboard/DashHeader';
import Subsecribe from '../components/Subsecribe/Subsecribe';

export default function DashboardLayout() {
  const { open } = useSelector((state) => state.upgrade.value);
  const { isOpen } = useSelector((state) => state.sidebar.value);

  return (
    <DashboardWrapper className="page-continer" isOpen={isOpen}>
      <div className="main-page">
        <Header />
        <div className="main-content">
          {open && <Subsecribe />}
          <Outlet />
        </div>
      </div>
      <Sidebar />
    </DashboardWrapper>
  );
}

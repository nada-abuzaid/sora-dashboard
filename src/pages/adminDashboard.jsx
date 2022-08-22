import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import AdminTable from '../components/Admin';
import { setDashboard } from '../store';

function AdminDashboard() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setDashboard({ dashboard: 'admin' }));
  }, []);

  return (
    <AdminTable />
  );
}

export default AdminDashboard;

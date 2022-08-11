import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import AdminTable from '../pagesComponents/Admin/AdminTable';
import { setDashboard } from '../state/dashboard';

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

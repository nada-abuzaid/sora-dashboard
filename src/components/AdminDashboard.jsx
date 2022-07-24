import React from 'react';
import AdminTable from './AdminTable';

import DashboardLayout from './Layout';

function AdminDashboard() {
  return (
    <DashboardLayout>
      <AdminTable />
    </DashboardLayout>
  );
}

export default AdminDashboard;

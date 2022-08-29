import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Form from '../components/Admin/Form';
import AdminTable from '../components/Admin';
import { setDashboard } from '../store';

function AdminDashboard() {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setDashboard({ dashboard: 'admin' }));
  }, []);

  return (
    <>
      {isOpen && <Form isOpen={isOpen} setIsOpen={setIsOpen} />}
      <AdminTable setIsOpen={setIsOpen} isOpen={isOpen} />
    </>
  );
}

export default AdminDashboard;

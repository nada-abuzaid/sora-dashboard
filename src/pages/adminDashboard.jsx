import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import AdminTable from '../pagesComponents/Admin';
import { setDashboard } from '../state';
import Form from '../pagesComponents/Admin/Form';

function AdminDashboard() {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setDashboard({ dashboard: 'admin' }));
  }, []);

  return (
    <>
      {
      isOpen && <Form />
    }
      <AdminTable setIsOpen={setIsOpen} isOpen={isOpen} />
    </>
  );
}

export default AdminDashboard;

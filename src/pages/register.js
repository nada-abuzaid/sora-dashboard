import React from 'react';
import LeftSide from '../components/LeftSide';
import AuthLayout from '../components/Layout/AuthLayout';

export default function Register() {
  return (
    <div className='main'>
      <AuthLayout>
        <LeftSide />
      </AuthLayout>
    </div>
  );
}

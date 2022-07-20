import React from 'react';
import { MdOutlineModeEditOutline } from 'react-icons/md';
import { DashboardLayout } from '../components';
import { AccountStyle } from '../css/styles';

export default function Account() {
  return (
    <DashboardLayout>
      <AccountStyle>
        <div className='head'>
          <p>Profile Information</p>
          <button className='edit-icon'>
            <MdOutlineModeEditOutline />
          </button>
        </div>
      </AccountStyle>
    </DashboardLayout>
  );
}

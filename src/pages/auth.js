import React from 'react';
import { LeftPanel } from '../pagesComponents/Auth/LeftPanel';
import { AuthLayout } from '../components';

export default function Auth() {
  const url = window.location.search.substring(1);
  let title = '';
  if (url === 'set-password') {
    title = 'Set your password';
  } else if (url === 'verify-email') {
    title = 'Verify Email';
  } else if (url === 'forgot-password') {
    title = 'Forgot password';
  } else {
    title = 'Welcome to Syrona Health';
  }

  return (
    <AuthLayout>
      <LeftPanel title={title} />
    </AuthLayout>
  );
}

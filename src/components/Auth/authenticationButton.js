import React from 'react';

import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from './loginButton';
import LogoutButton from './logoutButton';

function AuthenticationButton() {
  const { isAuthenticated } = useAuth0();

  return isAuthenticated ? <LogoutButton /> : <LoginButton />;
}

export default AuthenticationButton;

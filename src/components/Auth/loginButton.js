import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { SubmitButton } from '../Form';

function LoginButton() {
  const { loginWithRedirect } = useAuth0();
  return (
    <SubmitButton
      title="Login"
      className="btn btn-primary btn-block"
      onClick={() => loginWithRedirect()}
    />
  );
}

export default LoginButton;

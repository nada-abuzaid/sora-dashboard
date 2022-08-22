import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import propTypes from 'prop-types';
import { DOMAIN, CLIENT_ID } from '../config';

export default function Auth0ProviderFunc({ children }) {
  const domain = DOMAIN;
  const clientId = CLIENT_ID;

  const navigate = useNavigate();

  const onRedirectCallback = () => {
    navigate(window.location.pathname);
  };

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
}

Auth0ProviderFunc.propTypes = {
  children: propTypes.node.isRequired,
};

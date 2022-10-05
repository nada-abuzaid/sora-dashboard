import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import propTypes from 'prop-types';
import { DOMAIN, CLIENT_ID, AUDEIENCE } from '../config';

export default function Auth0ProviderFunc({ children }) {
  const navigate = useNavigate();

  const onRedirectCallback = () => {
    navigate(window.location.pathname);
  };

  return (
    <Auth0Provider
      domain={DOMAIN}
      clientId={CLIENT_ID}
      redirectUri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
      audience={AUDEIENCE}
    >
      {children}
    </Auth0Provider>
  );
}

Auth0ProviderFunc.propTypes = {
  children: propTypes.node.isRequired,
};

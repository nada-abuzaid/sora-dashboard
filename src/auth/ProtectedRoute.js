import React from 'react';
import { Route } from 'react-router-dom';
import { withAuthenticationRequired } from '@auth0/auth0-react';

// eslint-disable-next-line react/prop-types
function ProtectedRoute({ element, ...args }) {
  return (
    <Route
      component={withAuthenticationRequired(element, { returnTo: window.location.origin })}
      {...args}
    />
  );
}

export default ProtectedRoute;

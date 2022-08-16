import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import Auth0ProviderWithHistory from './auth/auth0-provider-with-history';
import App from './App';
import upgradeReducer from './state/upgrade';
import loadingReducer from './state/loading';
import dashboardReducer from './state/dashboard';
import tokenReducer from './state/token';
import companiesReducer from './state/companies';

const store = configureStore({
  reducer: {
    upgrade: upgradeReducer,
    loading: loadingReducer,
    dashboard: dashboardReducer,
    token: tokenReducer,
    companies: companiesReducer,
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <Auth0ProviderWithHistory>
        <App />
      </Auth0ProviderWithHistory>
    </Provider>
  </BrowserRouter>,
);

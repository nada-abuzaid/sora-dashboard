import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import Auth0ProviderFunc from './auth/auth0Provider';
import App from './App';
import {
  upgradeReducer,
  loadingReducer,
  dashboardReducer,
  tokenReducer,
  companiesReducer,
} from './state';

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
      <Auth0ProviderFunc>
        <App />
      </Auth0ProviderFunc>
    </Provider>
  </BrowserRouter>,
);

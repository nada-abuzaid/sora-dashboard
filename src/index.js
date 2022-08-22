import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Auth0ProviderFunc from './auth/auth0Provider';
import App from './App';
import {
  store,
} from './store';

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

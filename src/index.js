import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import App from './App';
import upgradeReducer from './state/upgrade';
import loadingReducer from './state/loading';
import dashboardReducer from './state/dashboard';

const store = configureStore({
  reducer: {
    upgrade: upgradeReducer,
    loading: loadingReducer,
    dashboard: dashboardReducer,
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
);

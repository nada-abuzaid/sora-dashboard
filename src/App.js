import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Route, Routes } from 'react-router-dom';
import { GlobalStyle } from './styles';
import 'antd/dist/antd.min.css';
import theme from './themes';
import { DashboardLayout } from './components';
import {
  Contact,
  Account,
  Dashboard,
  AdminDashboard,
  Auth,
} from './pages';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/account" element={<Account />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

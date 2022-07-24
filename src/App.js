import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Route, Routes } from 'react-router-dom';
import GlobalStyle from './styles';
import 'antd/dist/antd.min.css';
import theme from './themes/theme';
import Dashboard from './pages/dashboard';
import Account from './pages/account';
import Contact from './pages/contact';
import Auth from './pages/auth';
import { DashboardLayout } from './components';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/account" element={<Account />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;

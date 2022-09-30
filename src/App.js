import React, { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';
import { GlobalStyle } from './styles';
import 'antd/dist/antd.min.css';
import theme from './themes';
import AllRoutes from './app/router';

export default function App() {
  const controller = new AbortController();
  const { getAccessTokenSilently, isAuthenticated } = useAuth0();
  const navigate = useNavigate();

  getAccessTokenSilently().then((tokenVal) => {
    localStorage.setItem('token', tokenVal);
  });

  useEffect(() => {
    if (!isAuthenticated) {
      localStorage.removeItem('token');
      navigate('/auth');
    }
    return () => {
      controller.abort();
    };
  }, [isAuthenticated]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AllRoutes />
    </ThemeProvider>
  );
}

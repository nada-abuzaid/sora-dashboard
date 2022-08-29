import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles';
import 'antd/dist/antd.min.css';
import theme from './themes';
import AllRoutes from './app/router';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AllRoutes />
    </ThemeProvider>
  );
}

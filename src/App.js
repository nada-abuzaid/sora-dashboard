import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Route, Routes } from 'react-router-dom';
import { GlobalStyle } from './styles';
import 'antd/dist/antd.min.css';
import theme from './themes';
import { DashboardLayout } from './layouts';
import { Auth } from './pages';
import routes from './routes';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/" element={<DashboardLayout />}>
          {routes.map((route) => {
            if (route.path === '') {
              return (
                <Route
                  index
                  key={route.key}
                  element={<route.componentName />}
                />
              );
            }
            return (
              <Route
                key={route.key}
                path={route.path}
                element={<route.componentName />}
              />
            );
          })}
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

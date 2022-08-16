import React, { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { Route, Routes } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
// import axios from 'axios';
// import { useDispatch, useSelector } from 'react-redux';
import GlobalStyle from './styles';
import 'antd/dist/antd.min.css';
import theme from './themes/theme';
import Dashboard from './pages/dashboard';
import Account from './pages/account';
import Contact from './pages/contact';
import Auth from './pages/auth';
import { DashboardLayout } from './components';
import AdminDashboard from './pages/adminDashboard';
// import { setToken } from './state/token';

function App() {
  const { isLoading, user, getAccessTokenSilently } = useAuth0();
  // const dispatch = useDispatch();
  // const { token } = useSelector((state) => state.token.value);

  if (isLoading) {
    return <div>loading..</div>;
  }

  const getToken = async () => {
    const tokenn = await getAccessTokenSilently();
    return tokenn;
  };

  useEffect(() => {
    if (user) {
      const tokenVal = getToken();
      // dispatch(setToken({ token: tokenVal }));
      console.log(tokenVal);
      // const req = await axios.get(`${process.env.REACT_APP_API_URL}/api/v1/companies`, {
      //   headers: {
      //     Authorization: `${tokenVal}`,
      //   },
      // });
    }
  }, [user]);

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

export default App;

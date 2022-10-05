import { configureStore } from '@reduxjs/toolkit';
import upgradeReducer, { setPro } from './upgrade';
import loadingReducer, { setLoading } from './loading';
import dashboardReducer, { setDashboard } from './dashboard';
import tokenReducer, { setToken } from './token';
import companiesReducer, { setCompanies } from './companies';
import employeesReducer, { setEmployees } from './employees';
import sidebarReducer, { setSidebarOpen } from './sidebar';

const store = configureStore({
  reducer: {
    upgrade: upgradeReducer,
    loading: loadingReducer,
    dashboard: dashboardReducer,
    token: tokenReducer,
    companies: companiesReducer,
    employees: employeesReducer,
    sidebar: sidebarReducer,
  },
});

export {
  setPro,
  setLoading,
  setDashboard,
  setToken,
  setCompanies,
  setEmployees,
  store,
  setSidebarOpen,
  sidebarReducer,
};

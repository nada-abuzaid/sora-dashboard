import {
  Account, AdminDashboard, Contact, Dashboard,
} from '../../views';
import Reports from '../../views/reports';

const routes = [
  {
    key: 1,
    path: 'admin',
    Element: AdminDashboard,
  }, {
    key: 2,
    path: 'contact',
    Element: Contact,
  }, {
    key: 3,
    path: 'account',
    Element: Account,
  }, {
    key: 4,
    path: 'reports',
    Element: Reports,
  },
  {
    key: 5,
    path: '',
    Element: Dashboard,
  },
];

export default routes;

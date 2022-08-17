import {
  Account, AdminDashboard, Contact, Dashboard,
} from '../../pages';

const routes = [
  {
    key: 1,
    path: 'admin',
    componentName: AdminDashboard,
  }, {
    key: 2,
    path: 'contact',
    componentName: Contact,
  }, {
    key: 3,
    path: 'account',
    componentName: Account,
  }, {
    key: 4,
    path: '',
    componentName: Dashboard,
  },
];

export default routes;

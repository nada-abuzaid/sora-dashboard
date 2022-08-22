import React from 'react';
import { withAuthenticationRequired } from '@auth0/auth0-react';
import WelcomeCarousel from '../components/Dashboard/Popup';
import Statistics from '../components/Dashboard/StatisticNumbers';
import Charts from '../components/Dashboard/Charts/Charts';
import Empty from '../components/Dashboard/Empty';
import Loader from '../components/Loader';
import useEmployees from '../hooks/useEmployees';

function Dashboard() {
  const [employees, companyId, isLoading] = useEmployees();

  return (
    <>
      <WelcomeCarousel />
      {isLoading ? <Loader /> : companyId !== 0 && employees ? (
        <>
          <Statistics />
          <Charts />
        </>
      ) : <Empty />}
    </>
  );
}

export default withAuthenticationRequired(Dashboard, {
  returnTo: window.location.origin,
});

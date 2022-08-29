import React from 'react';
import WelcomeCarousel from '../components/Popup';
import Statistics from '../components/StatisticNumbers';
import Charts from '../components/Charts/Charts';
import Empty from '../components/Empty';
import Loader from '../components/Loader';
import useEmployees from '../hooks/useEmployees';

export default function Dashboard() {
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

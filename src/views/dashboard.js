import React from 'react';
import WelcomeCarousel from '../components/Popup';
import Statistics from '../components/StatisticNumbers';
import Charts from '../components/Charts/Charts';
import Empty from '../components/Empty';
import useEmployees from '../hooks/useEmployees';
import MyLoader from '../components/Loader';

export default function Dashboard() {
  const [employees, companyId, isLoading] = useEmployees();
  return (
    <>
      <WelcomeCarousel />
      {isLoading ? <MyLoader /> : companyId !== 0 && employees ? (
        <>
          <Statistics />
          <Charts />
        </>
      ) : <Empty />}
    </>
  );
}

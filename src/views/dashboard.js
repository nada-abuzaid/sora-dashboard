import React, { useState } from 'react';
import WelcomeCarousel from '../components/Popup';
import Statistics from '../components/StatisticNumbers';
import Charts from '../components/Charts/Charts';
import Empty from '../components/Empty';
import useEmployees from '../hooks/useEmployees';
import MyLoader from '../components/Loader';
import Filter from '../components/Dashboard/Filter';
import Breadcrumb from '../components/Admin/Breadcrumb';

export default function Dashboard() {
  const [employees, companyId, isLoading] = useEmployees();
  const [role] = useState('admin');

  return (
    <>
      <WelcomeCarousel />
      {isLoading ? <MyLoader /> : companyId !== 0 && employees ? (
        <>
          {
            role !== 'admin' ? (<Filter />) : (<Breadcrumb companyName="Benefex" />)
          }
          <Statistics />
          <Charts />
        </>

      ) : <Empty />}
    </>
  );
}

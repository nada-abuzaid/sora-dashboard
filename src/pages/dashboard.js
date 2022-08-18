import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withAuthenticationRequired } from '@auth0/auth0-react';
import WelcomeCarousel from '../pagesComponents/Dashboard/Popup';
import Statistics from '../pagesComponents/Dashboard/StatisticNumbers';
import Subsecribe from '../pagesComponents/Dashboard/Subsecribe/Subsecribe';
import Charts from '../pagesComponents/Dashboard/Charts/Charts';
import Empty from '../pagesComponents/Dashboard/Empty';
import { getEmployeesGender } from '../services/callApi';
import { setEmployees } from '../state/employees';

function Dashboard() {
  const { open } = useSelector((state) => state.upgrade.value);
  const { employees, companyId } = useSelector((state) => state.employees.value);

  const dispatch = useDispatch();

  useEffect(() => {
    const id = 8;
    const fetchData = async () => {
      const { employeesCount } = await getEmployeesGender(id);
      dispatch(setEmployees({ employees: employeesCount, companyId: id }));
    };
    fetchData();
  }, [companyId]);

  return (
    <>
      <WelcomeCarousel />
      {
        open && <Subsecribe />
      }
      <Statistics />
      {
       companyId === 0 ? (<></>) : employees ? (
         <>
           <Charts />
         </>
       ) : (<Empty />)
     }
    </>
  );
}

export default withAuthenticationRequired(Dashboard, { returnTo: window.location.origin });

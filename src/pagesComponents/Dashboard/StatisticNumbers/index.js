import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getEmployeesGender } from '../../../services/callApi';
import Statistic from './Statistic';
import { StatisticsStyle } from './styles';
import { setEmployees } from '../../../state';

export default function Statistics() {
  const [data, setData] = React.useState([]);

  const { employees, companyId } = useSelector(
    (state) => state.employees.value,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const { employeesGender, employeesCount } = await getEmployeesGender(companyId);
      dispatch(setEmployees({ employees: employeesCount, companyId }));
      setData(employeesGender);
    };
    fetchData();
  }, [companyId]);

  return (
    <>
      {companyId === 0 ? (
        <>Loading...</>
      ) : companyId !== 0 && employees ? (
        <StatisticsStyle>
          <Statistic number={employees} title="Employees" />
          {data.map(({ count, label }, index) => (
            <Statistic key={index} number={count} title={label} />
          ))}
        </StatisticsStyle>
      ) : (
        <></>
      )}
    </>
  );
}

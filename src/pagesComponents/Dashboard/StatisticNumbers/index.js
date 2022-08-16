import axios from 'axios';
import React, { useEffect } from 'react';
import Statistic from './Statistic';
import { StatisticsStyle } from './styles';

export default function Statistics() {
  const [data, setData] = React.useState([]);
  const [employees, setEmployees] = React.useState(0);
  useEffect(() => {
    const fetchData = async () => {
      const { data: { data: { company: { employeesGender, employeesCount } } } } = await axios.get(`${process.env.REACT_APP_API_URL}/api/v1/companies/3/employees-gender`);
      setData(employeesGender);
      setEmployees(employeesCount);
    };
    fetchData();
  }, []);

  return (
    <StatisticsStyle>
      <Statistic number={employees} title="Employees" />
      {
      data.map(({ count, label }, index) => (
        <Statistic key={index} number={count} title={label} />
      ))
      }
    </StatisticsStyle>
  );
}

import React from 'react';
import Statistic from './Statistic';
import { StatisticsStyle } from './styles';
import useStatic from '../../../hooks/useStatic';

export default function Statistics() {
  const [data, employees] = useStatic();
  return (
    <StatisticsStyle>
      <Statistic number={employees} title="Employees" />
      {data.map(({ count, label }, index) => (
        <Statistic key={index} number={count} title={label} />
      ))}
    </StatisticsStyle>
  );
}

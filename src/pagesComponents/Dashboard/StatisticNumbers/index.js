import React from 'react';
import Statistic from './Statistic';
import { StatisticsStyle } from './styles';

export default function Statistics() {
  const data = [
    {
      number: '250',
      title: 'Employees',
    },
    {
      number: '100',
      title: 'Female',
    },
    {
      number: '50',
      title: 'Male',
    },
    {
      number: '25',
      title: 'Transfemale',
    },
    {
      number: '25',
      title: 'Transmale',
    },
    {
      number: '25',
      title: 'None or agender',
    },
    {
      number: '20',
      title: 'Other',
    },
    {
      number: '05',
      title: 'Prefer not to say',
    },
  ];
  return (
    <StatisticsStyle>
      {data.map((item, index) => {
        return (
          <Statistic key={index} number={item.number} title={item.title} />
        );
      })}
    </StatisticsStyle>
  );
}

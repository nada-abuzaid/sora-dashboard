import React from 'react';
import Statistic from './Statistic';
import { StatisticsStyle } from './styles';

export default function Statistics() {
  const data = [
    {
      id: 1,
      number: 250,
      title: 'Employees',
    },
    {
      id: 2,
      number: 100,
      title: 'Female',
    },
    {
      id: 3,
      number: 50,
      title: 'Male',
    },
    {
      id: 4,
      number: 25,
      title: 'Transfemale',
    },
    {
      id: 5,
      number: 25,
      title: 'Transmale',
    },
    {
      id: 6,
      number: 25,
      title: 'None or agender',
    },
    {
      id: 7,
      number: 20,
      title: 'Other',
    },
    {
      id: 8,
      number: 5,
      title: 'Prefer not to say',
    },
  ];
  return (
    <StatisticsStyle>
      {data.map(({ id, number, title }) => (
        <Statistic key={id} statisticNumber={number} title={title} />
      ))}
    </StatisticsStyle>
  );
}

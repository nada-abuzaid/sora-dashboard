import React from 'react';
import AllStatistics from '../components/Dashboard/StatisticNumbers';

export default {
  title: 'Components/Statictics',
  Component: AllStatistics,
};

function Template() {
  return <AllStatistics isOpen />;
}

export const Statistics = Template.bind({});

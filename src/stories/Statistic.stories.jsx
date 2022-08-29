import React from 'react';
import Statistic from '../components/Dashboard/StatisticNumbers/Statistic';

export default {
  title: 'Components/Statictics',
  component: Statistic,
  parameters: {
    layout: 'fullscreen',
  },
};

function Template(args) {
  return <Statistic {...args} />;
}

export const Statistiic = Template.bind({});

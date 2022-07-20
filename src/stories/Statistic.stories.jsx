import React from 'react';
import Statistic from '../pagesComponents/Dashboard/StatisticNumbers/Statistic';

export default {
  title: 'Components/Statictics',
  component: Statistic,
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => <Statistic {...args} />;

export const Statistiic = Template.bind({});

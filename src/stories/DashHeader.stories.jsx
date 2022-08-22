import React from 'react';
import DashHeader from '../pagesComponents/Dashboard/DashHeader';

export default {
  title: 'Components/Header',
  component: DashHeader,
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => <DashHeader {...args} />;

export const DashboardHeader = Template.bind({});

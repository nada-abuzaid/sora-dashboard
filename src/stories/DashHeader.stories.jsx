import React from 'react';
import DashHeader from '../components/Dashboard/DashHeader';

export default {
  title: 'Components/Header',
  component: DashHeader,
  parameters: {
    layout: 'fullscreen',
  },
};

function Template(args) {
  return <DashHeader {...args} />;
}

export const DashboardHeader = Template.bind({});

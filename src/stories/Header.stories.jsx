import React from 'react';
import Header from '../components/Header';

export default {
  title: 'Components/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
  },
};

function Template() {
  return <Header />;
}

export const AuthHeader = Template.bind({});

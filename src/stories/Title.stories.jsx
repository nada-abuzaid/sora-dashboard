import React from 'react';
import Title from '../components/Auth/LeftPanel/Title';

export default {
  title: 'Components/Title',
  component: Title,
};

function Template(args) {
  return <Title {...args} />;
}

export const AuthTitle = Template.bind({});
AuthTitle.args = {
  title: 'Welcome to Syrona Health',
};

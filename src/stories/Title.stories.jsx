import React from 'react';
import Title from '../pagesComponents/auth/LeftPanel/Title';

export default {
  title: 'Components/Title',
  component: Title,
};

const Template = (args) => <Title {...args} />;

export const AuthTitle = Template.bind({});
AuthTitle.args = {
  title: 'Welcome to Syrona Health',
};

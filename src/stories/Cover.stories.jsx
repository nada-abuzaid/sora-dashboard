import React from 'react';
import RightPanel from '../pages-components/auth/RightPanel';
import { ThemeProvider } from 'styled-components';
import { theme } from '../themes/theme';

export default {
  title: 'Components/RightPanel',
  component: RightPanel,
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
};

const Template = () => <RightPanel />;

export const RightPanell = Template.bind({});

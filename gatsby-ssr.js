import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './src/components/styled';
import { theme } from './src/themes/theme';

export const wrapRootElement = ({ element }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {element}
    </ThemeProvider>
  );
};


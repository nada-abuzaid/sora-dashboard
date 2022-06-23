import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './src/components/styled';

const theme = {
  colors: {
    main: '#FFFFFF',
  },
};

export const wrapRootElement = ({ element }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {element}
    </ThemeProvider>
  );
};

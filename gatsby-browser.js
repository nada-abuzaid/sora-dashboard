import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './src/components/styled';
import Theme from './src/themes/theme';


export const wrapRootElement = ({ element }) => {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      {element}
    </ThemeProvider>
  );
};

import React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import Theme from './src/themes/theme';

const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;
export const wrapRootElement = ({ element }) => {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      {element}
    </ThemeProvider>
  );
};

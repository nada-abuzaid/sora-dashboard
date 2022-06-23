import React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

const theme = {
  colors: {
    main: '#FFFFFF',
  },
};
const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;
export const wrapRootElement = ({ element }) => {
  return (
    <ThemeProvider theme={theme}>
      {element}
    </ThemeProvider>
  );
};

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  position: relative;
}
p {
  margin-bottom: 0 !important;
}
`;

export default GlobalStyle;

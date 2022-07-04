import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: "DM Serif Text";
  src: url("../fonts/DMSerifText-Regular.ttf")
}
@font-face {
  font-family: "Mulish";
  src: url("../fonts/Mulish-Regular.ttf");
}
@font-face {
  font-family: "Mulish-SemiBold";
  src: url("../fonts/Mulish-SemiBold.ttf");
}
@font-face {
  font-family: "Mulish-Bold";
  src: url("../fonts/Mulish-Bold.ttf");
}
@font-face {
  font-family: "NunitoSans";
  src: url("../fonts/NunitoSans-Regular.ttf");
}
@font-face {
  font-family: "NunitoSans-SemiBold";
  src: url("../fonts/NunitoSans-SemiBold.ttf");
}
@font-face {
  font-family: "NunitoSans-Bold";
  src: url("../fonts/NunitoSans-Bold.ttf");
}
*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body{
  position: relative;
}
p{
  margin-bottom: 0;
}
`;

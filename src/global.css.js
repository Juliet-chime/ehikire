import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');

 *{
  box-sizing: border-box;
}
*::before{
  box-sizing: border-box;
}
*::after {
  box-sizing: border-box;
}

html {
  margin: 0 !important;
  font-size: 14px;
  scroll-behavior:smooth;
}

body {
  font-family: "Inter", sans-serif;
  font-size: 15px;
  -webkit-font-smoothing: antialiased;
  margin: 0px;
  padding: 0px;
  background-color:white
}

h1 {
  margin: 0px;
  padding: 0px;
}
h2 {
  margin: 0px;
  padding: 0px;
}
h3 {
  margin: 0px;
  padding: 0px;
}
h4 {
  margin: 0px;
  padding: 0px;
}
h5 {
  margin: 0px;
  padding: 0px;
}
h6 {
  margin: 0px;
  padding: 0px;
}
p {
  margin: 0px;
  padding: 0px;
}
`;

import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }

  button {
    cursor: pointer;
    outline: none;
    border: none;
  }
`;
 
export default GlobalStyle;
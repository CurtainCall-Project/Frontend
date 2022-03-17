import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
  ${reset}

  body {
    font-family: "Noto Sans", sans-serif;
    font-size: 16px;
    color: #000;
  }

  a {
    text-decoration: none;
    color: #000;
  }

  ul {
    list-style: none;
  }
`;

export default GlobalStyles;

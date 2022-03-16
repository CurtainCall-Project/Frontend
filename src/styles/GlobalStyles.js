import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
  ${reset}

  body {
    font-family: "Noto Sans", sans-serif;
    font-size: 16px;
    color: #000;
    width: 100%;
    height: 100%;
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

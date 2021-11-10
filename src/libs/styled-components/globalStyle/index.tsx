import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html,
  body {
    font-family: Mohave, -apple-system, sans-serif;
  }

  main {
    max-width: 1100px;
    width: 100%;
    height: 100%;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    outline: none;
    padding: 0;
    cursor: pointer;
    background: none;
    border: 0;
  }
`;

export { GlobalStyle };

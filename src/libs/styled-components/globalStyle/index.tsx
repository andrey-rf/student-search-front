import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html,
  body {
    font-family: Montserrat, -apple-system, sans-serif;

    @media(max-width: 1250px) {
      font-size: 12px;
    }

    @media(max-width: 1000px) {
      font-size: 10px;
    }

    @media(max-width: 300px) {
      font-size: 8px;
    }
  }

  main {
    max-width: 1440px;
    width: 100%;
    height: 100%;
    padding: 3.5rem 0 5rem;

    @media (max-width: 1250px) {
      max-width: 1000px;
    }

    @media (max-width: 1000px) {
      max-width: 800px;
    }
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

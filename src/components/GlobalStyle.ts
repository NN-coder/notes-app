import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @media screen and (prefers-reduced-motion: reduce) {
    * {
      transition: none;
      animation: none;
    }
  }
  :root {
    font-size: 10px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
      'Open Sans', 'Helvetica Neue', sans-serif;
  }
  body {
    padding: 0 10px;
    color: ${({ theme }) => theme.textColor};
    background-color: ${({ theme }) => theme.bodyBgColor};
  }
`;

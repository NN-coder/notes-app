import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createGlobalStyle } from 'styled-components';
import { App } from './components/App';
import { store } from './redux/store';
import { reportWebVitals } from './reportWebVitals';

const GlobalStyle = createGlobalStyle`
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

    --bg-color: #202124;
    --text-color: white;
    --border-color: #5f6368;
  }
  body {
    color: var(--text-color);
    background-color: var(--bg-color);
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyle />
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// eslint-disable-next-line no-console
reportWebVitals(console.log);

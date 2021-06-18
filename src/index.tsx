import React from 'react';
import { render } from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { App } from './components/App';
import { store } from './redux/store';
import { setMobileMode } from './redux/actions/layoutActions';
import 'normalize.css';
import './globalStyles.css';

window
  .matchMedia('(max-width: 800px)')
  .addEventListener('change', ({ matches }) => store.dispatch(setMobileMode(matches)));

render(
  <React.StrictMode>
    <HashRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

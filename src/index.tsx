import React from 'react';
import { render } from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import { IconContext } from 'react-icons/lib';
import { App } from './components/App';
import { store, persistor } from './redux/store';
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
        <PersistGate persistor={persistor}>
          <IconContext.Provider value={{ size: '100%' }}>
            <App />
          </IconContext.Provider>
        </PersistGate>
      </Provider>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

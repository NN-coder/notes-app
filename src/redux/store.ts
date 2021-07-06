import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage/session';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
import { rootReducer } from './reducers/rootReducer';

const persistedReducer = persistReducer({ key: 'app_state', storage }, rootReducer);

export const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(thunk)));
export const persistor = persistStore(store);

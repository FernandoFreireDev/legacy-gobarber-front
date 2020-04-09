import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';

import './config/ReactotronConfig';

import Routes from './routes';
import History from './services/history';
import GloblaStyle from './styles/global';

import { store, persistor } from './store';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={History}>
          <Routes />
          <GloblaStyle />
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;

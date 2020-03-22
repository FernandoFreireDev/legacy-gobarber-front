import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';

import Routes from './routes';
import History from './services/history';
import GloblaStyle from './styles/global';

import './config/ReactotronConfig';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Router history={History}>
        <Routes />
        <GloblaStyle />
      </Router>
    </Provider>
  );
}

export default App;

import React from 'react';
import { Router } from 'react-router-dom';

import Routes from './routes';
import History from './services/history';

import './config/ReactotronConfig';
import GloblaStyle from './styles/global';

function App() {
  return (
    <Router history={History}>
      <Routes />
      <GloblaStyle />
    </Router>
  );
}

export default App;

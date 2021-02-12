import React from 'react';
import Routes from '../Router/';
import { ConnectedRouter } from 'connected-react-router';
import { history } from '../../store'

export default function App() {
  return (
    <ConnectedRouter history={history}>
      <Routes />
    </ConnectedRouter>
  );
}

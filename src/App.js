import React from 'react';
import { Provider } from 'react-redux';

import Dashboard from './containers';

import store from 'store';

export default class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <Dashboard />
      </Provider>
    );
  }
}

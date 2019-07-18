import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import App from './App';
import store from './redux';
 
export default class TahananNarkoba extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}
 
AppRegistry.registerComponent('TahananNarkoba', () => TahananNarkoba);
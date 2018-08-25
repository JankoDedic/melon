import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import 'normalize.css/normalize.css';
import './styles/styles.scss';

import configureStore from './store/configureStore';
import { startSetSongs, clearSongs } from './actions/songs';
import AppRouter, { history } from './routers/AppRouter';
import Player from './components/Player';
import { firebase } from './firebase/firebase';
import { login, logout } from './actions/auth';
import App from './components/App';

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <App />
  </Provider>
);

const renderApp = () => {
  ReactDOM.render(jsx, document.getElementById('app'));
};

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(login(user.uid));
    store.dispatch(startSetSongs()).then(() => {
      renderApp();
      history.push('/dashboard');
    });
  } else {
    store.dispatch(logout());
    console.log('logout');
    store.dispatch(clearSongs());
  }
  renderApp();
});

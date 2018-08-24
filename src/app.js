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

const store = configureStore();

const App = (
  <Provider store={store}>
    <div>
      <AppRouter />
      <Player />
    </div>
  </Provider>
);

const renderApp = () => {
  ReactDOM.render(App, document.getElementById('app'));
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

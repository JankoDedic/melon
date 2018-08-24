import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import 'normalize.css/normalize.css';
import './styles/styles.scss';

import configureStore from './store/configureStore';
import { startSetSongs } from './actions/songs';
import AppRouter from './routers/AppRouter';
import Player from './components/Player';
import { firebase } from './firebase/firebase';

const store = configureStore();

const App = (
  <Provider store={store}>
    <div>
      <AppRouter />
      <Player />
    </div>
  </Provider>
);

ReactDOM.render(App, document.getElementById('app'));

store.dispatch(startSetSongs());

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    console.log('login');
  } else {
    console.log('logout');
  }
});

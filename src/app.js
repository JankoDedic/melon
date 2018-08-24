import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { setSongs } from './actions/songs';
import { setTextFilter } from './actions/filters';
import { setNowPlayingSong } from './actions/nowPlayingSong';

import 'normalize.css/normalize.css';
import './styles/styles.scss';

import configureStore from './store/configureStore';

import AppRouter from './routers/AppRouter';
import Header from './components/Header';
import Player from './components/Player';

import database from './firebase/firebase';

database.ref().set({
  name: 'Hello again, Firebase!'
});

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

const songs = [{
  id: 0,
  title: 'This Is What You Came For',
  artists: 'Calvin Harris, Rihanna',
  url: 'https://youtu.be/kOkQ4T5WO9E',
}, {
  id: 1,
  title: 'My Way',
  artists: 'Frank Sinatra',
  url: 'https://youtu.be/6E2hYDIFDIU',
}, {
  id: 2,
  title: 'Fragile',
  artists: 'Sting',
  url: 'https://youtu.be/lB6a-iD6ZOY',
}];

store.dispatch(setSongs(songs));

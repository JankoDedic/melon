import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { addSong, editSong, removeSong } from './actions/songs';
import { setTextFilter } from './actions/filters';
import { setNowPlayingSong } from './actions/nowPlayingSong';

import 'normalize.css/normalize.css';
import './styles/styles.scss';

import configureStore from './store/configureStore';
import Header from './components/Header';
import Player from './components/Player';
import SongDashboardPage from './components/SongDashboardPage';

const App = () => (
  <div>
    <Header />
    <SongDashboardPage />
    <Player />
  </div>
);

const store = configureStore();
const WrappedApp = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(WrappedApp, document.getElementById('app'));

const firstSong = {
  title: 'This Is What You Came For',
  artists: 'Calvin Harris, Rihanna',
  url: 'https://youtu.be/kOkQ4T5WO9E',
};

store.dispatch(addSong(firstSong));

store.dispatch(addSong({
  title: 'My Way',
  artists: 'Frank Sinatra',
  url: 'https://youtu.be/6E2hYDIFDIU',
}));

store.dispatch(addSong({
  title: 'Fragile',
  artists: 'Sting',
  url: 'https://youtu.be/lB6a-iD6ZOY',
}));

store.dispatch(setNowPlayingSong(firstSong));

console.log(store.getState());

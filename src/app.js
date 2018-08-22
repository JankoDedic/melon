import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

import 'normalize.css/normalize.css';
import './styles/styles.scss';

import Header from './components/Header';
import Player from './components/Player';
import SongDashboardPage from './components/SongDashboardPage';

const defaultSongs = [
  { title: 'This Is What You Came For', artists: 'Calvin Harris, Rihanna' },
  { title: 'My Way', artists: 'Frank Sinatra' }
];

const songsReducer = (songs, action) => {
  return songs;
};

const store = createStore(songsReducer, defaultSongs);
console.log(store.getState());

const App = () => (
  <div>
    <Header />
    <SongDashboardPage />
    <Player />
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));

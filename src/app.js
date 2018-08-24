import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { startSetSongs } from './actions/songs';
import { setTextFilter } from './actions/filters';
import { setNowPlayingSong } from './actions/nowPlayingSong';

import 'normalize.css/normalize.css';
import './styles/styles.scss';

import configureStore from './store/configureStore';

import AppRouter from './routers/AppRouter';
import Header from './components/Header';
import Player from './components/Player';

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

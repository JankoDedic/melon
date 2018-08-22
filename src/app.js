import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore';

import 'normalize.css/normalize.css';
import './styles/styles.scss';

import Header from './components/Header';
import Player from './components/Player';
import SongDashboardPage from './components/SongDashboardPage';

const store = configureStore();
console.log(store.getState());

const App = () => (
  <div>
    <Header />
    <SongDashboardPage />
    <Player />
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));

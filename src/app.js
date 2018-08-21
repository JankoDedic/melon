import React from 'react';
import ReactDOM from 'react-dom';

import 'normalize.css/normalize.css';
import './styles/styles.scss';

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

ReactDOM.render(<App />, document.getElementById('app'));

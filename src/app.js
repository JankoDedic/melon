import React from 'react';
import ReactDOM from 'react-dom';

import './styles/components/Player.css';

import Player from './components/Player';

const App = () => (
  <Player />
);

ReactDOM.render(<App />, document.getElementById('app'));

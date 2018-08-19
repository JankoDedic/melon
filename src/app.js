import React from 'react';
import ReactDOM from 'react-dom';

import 'normalize.css/normalize.css';
import './styles/components/Player.css';

import Player from './components/Player';

const App = () => (
  <Player />
);

ReactDOM.render(<App />, document.getElementById('app'));

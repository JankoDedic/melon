import React from 'react';
import ReactDOM from 'react-dom';

import 'normalize.css/normalize.css';
import './styles/styles.scss';

import Player from './components/Player';

const App = () => (
  <Player />
);

ReactDOM.render(<App />, document.getElementById('app'));

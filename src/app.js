import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { addSong, editSong } from './actions/songs';

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

store.dispatch(addSong({ title: 'Fragile', artists: 'Sting' }));
store.dispatch(editSong(1, { title: 'My Way' }));

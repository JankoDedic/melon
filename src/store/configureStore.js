import { createStore } from 'redux';

import songsReducer from '../reducers/songs';

const defaultSongs = [
  { title: 'This Is What You Came For', artists: 'Calvin Harris, Rihanna' },
  { title: 'My Way', artists: 'Frank Sinatra' }
];

export default () => {
  const store = createStore(songsReducer, defaultSongs);
  return store;
};


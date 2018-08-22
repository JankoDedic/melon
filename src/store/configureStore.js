import { createStore, combineReducers } from 'redux';

import filtersReducer from '../reducers/filters';
import songsReducer from '../reducers/songs';
import nowPlayingSongReducer from '../reducers/nowPlayingSong';

export default () => {
  const store = createStore(combineReducers({
    songs: songsReducer,
    filters: filtersReducer,
    nowPlayingSong: nowPlayingSongReducer,
  }));
  return store;
};


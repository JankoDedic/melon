import { createStore, combineReducers } from 'redux';

import filtersReducer from '../reducers/filters';
import songsReducer from '../reducers/songs';

export default () => {
  const store = createStore(combineReducers({
    songs: songsReducer,
    filters: filtersReducer,
  }));
  return store;
};


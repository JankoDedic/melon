import { createStore, combineReducers } from 'redux';

import songsReducer from '../reducers/songs';

export default () => {
  const store = createStore(combineReducers({
    songs: songsReducer,
  }));
  return store;
};


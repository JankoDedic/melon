import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import filtersReducer from '../reducers/filters';
import songsReducer from '../reducers/songs';
import nowPlayingSongReducer from '../reducers/nowPlayingSong';
import authReducer from '../reducers/auth';

export default () => {
  const store = createStore(
    combineReducers({
      songs: songsReducer,
      filters: filtersReducer,
      nowPlayingSong: nowPlayingSongReducer,
      auth: authReducer,
    }),
    applyMiddleware(thunk)
  );
  return store;
};


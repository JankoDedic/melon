import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import filtersReducer from '../reducers/filters';
import songsReducer from '../reducers/songs';
import nowPlayingSongReducer from '../reducers/nowPlayingSong';
import authReducer from '../reducers/auth';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      songs: songsReducer,
      filters: filtersReducer,
      nowPlayingSong: nowPlayingSongReducer,
      auth: authReducer,
    }),
    composeEnhancers(applyMiddleware(thunk))
  );
  return store;
};


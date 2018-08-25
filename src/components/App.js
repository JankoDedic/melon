import React from 'react';
import { connect } from 'react-redux';

import AppRouter from '../routers/AppRouter';
import Player from './Player';

export const App = ({ isUserAuthenticated }) => (
  <div>
    <AppRouter />
    {isUserAuthenticated && <Player />}
  </div>
);

const mapStateToProps = (state) => ({
  isUserAuthenticated: !!state.auth.uid,
});

export default connect(mapStateToProps)(App);

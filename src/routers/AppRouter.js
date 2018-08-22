import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import Header from '../components/Header';
import SongDashboardPage from '../components/SongDashboardPage';
import Player from '../components/Player';

const App = () => (
  <div>
    <Header />
    <SongDashboardPage />
    <Player />
  </div>
);

const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <Route component={App} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;

import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import Header from '../components/Header';
import Player from '../components/Player';
import PrivateRoute from './PrivateRoute';
import SongDashboardPage from '../components/SongDashboardPage';

const App = () => (
  <div>
    <Header />
    <SongDashboardPage />
    <Player />
  </div>
);

const AddSongPlaceholder = () => (
  <div>
    Add Song page
  </div>
);

const EditSongPlaceholder = () => (
  <div>
    Edit Song page
  </div>
);

const SomeComponent = () => (
  <div>SomeComponent</div>
);

const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PrivateRoute path="/dashboard" component={SongDashboardPage} />
        <PrivateRoute path="/add" component={AddSongPlaceholder} />
        <PrivateRoute path="/edit/:id" component={EditSongPlaceholder} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;

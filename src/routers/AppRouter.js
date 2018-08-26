import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';
import SongDashboardPage from '../components/SongDashboardPage';
import AddSongPage from '../components/AddSongPage';
import EditSongPage from '../components/EditSongPage';
import Header from '../components/Header';
import LoginPage from '../components/LoginPage';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute path="/" exact={true} component={LoginPage} />
        <PrivateRoute path="/dashboard" component={SongDashboardPage} />
        <PrivateRoute path="/add" component={AddSongPage} />
        <PrivateRoute path="/edit/:id" component={EditSongPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;

import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import PrivateRoute from './PrivateRoute';
import SongDashboardPage from '../components/SongDashboardPage';
import AddSongPage from '../components/AddSongPage';
import EditSongPage from '../components/EditSongPage';
import Header from '../components/Header';

const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Header />
      <div className="content-container">
        <Switch>
          <PrivateRoute path="/dashboard" component={SongDashboardPage} />
          <PrivateRoute path="/add" component={AddSongPage} />
          <PrivateRoute path="/edit/:id" component={EditSongPage} />
        </Switch>
      </div>
    </div>
  </Router>
);

export default AppRouter;

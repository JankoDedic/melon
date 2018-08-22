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

const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <Route path="/dashboard" component={App} />
        <Route path="/add" component={AddSongPlaceholder} />
        <Route path="/edit/:id" component={EditSongPlaceholder} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;

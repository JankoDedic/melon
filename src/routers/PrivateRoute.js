import React from 'react';
import { Route } from 'react-router-dom';

import Header from '../components/Header';
import Player from '../components/Player';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} component={(props) => (
    <div>
      <Header />
      <Component {...props} />
      <Player />
    </div>
  )} />
);

export default PrivateRoute;

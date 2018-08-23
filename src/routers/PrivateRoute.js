import React from 'react';
import { Route } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} component={(props) => (
    <Component {...props} />
  )} />
);

export default PrivateRoute;

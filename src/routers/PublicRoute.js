import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

export const PublicRoute = ({
  component: Component,
  isUserAuthenticated,
  ...rest
}) => (
  <Route {...rest} component={(props) => (
    isUserAuthenticated ? (
      <Redirect to="/dashboard" />
    ) : (
      <Component {...props} />
    )
  )} />
);

const mapStateToProps = (state) => ({
  isUserAuthenticated: !!state.auth.uid,
});

export default connect(mapStateToProps)(PublicRoute);

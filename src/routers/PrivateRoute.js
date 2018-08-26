import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

import Header from '../components/Header';

const PrivateRoute = ({
  component: Component,
  isUserAuthenticated,
  ...rest
}) => (
  <Route {...rest} component={(props) => (
    isUserAuthenticated ? (
      <div>
        <Header />
        <Component {...props} />
      </div>
    ) : (
      <Redirect to="/" />
    )
  )} />
);

const mapStateToProps = (state) => ({
  isUserAuthenticated: !!state.auth.uid,
});

export default connect(mapStateToProps)(PrivateRoute);

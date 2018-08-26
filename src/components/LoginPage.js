import React from 'react';
import { connect } from 'react-redux';

import Logo from './Logo';
import { startLogin } from '../actions/auth';

export const LoginPage = ({ startLogin }) => (
  <div className="login-page-container">
    <div className="login-page">
      <Logo className="login-page__logo" />
      <div className="login-page__slogan">
        One music collection. Any stream.
      </div>
      <button
        className="login-page__button"
        onClick={startLogin}
      >
        Login with Google
      </button>
    </div>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin()),
});

export default connect(undefined, mapDispatchToProps)(LoginPage);

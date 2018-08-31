import React from 'react';
import { connect } from 'react-redux';

import Logo from './Logo';
import { startLogin, startAnonymousLogin } from '../actions/auth';

export const LoginPage = ({ startLogin, startAnonymousLogin }) => (
  <div className="login-page-container">
    <div className="login-page">
      <Logo className="login-page__logo" />
      <div className="login-page__slogan">
        One music collection. Any stream.
      </div>
      <button
        type="button"
        className="login-page__button"
        onClick={startLogin}
      >
      </button>
      <button
        type="button"
        className="login-page__guest-login-button"
        onClick={startAnonymousLogin}
      >
        Login as Guest
      </button>
    </div>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin()),
  startAnonymousLogin: () => dispatch(startAnonymousLogin()),
});

export default connect(undefined, mapDispatchToProps)(LoginPage);

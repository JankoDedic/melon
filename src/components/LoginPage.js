import React from 'react';
import { connect } from 'react-redux';

import Logo from './Logo';
import { startLogin } from '../actions/auth';

export const LoginPage = ({ startLogin }) => (
  <div>
    <Logo />
    <div>
      One music collection. Any stream.
    </div>
    <button onClick={startLogin}>Login with Google</button>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin()),
});

export default connect(undefined, mapDispatchToProps)(LoginPage);

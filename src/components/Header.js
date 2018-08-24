import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { startLogin } from '../actions/auth';

export const Header = ({ startLogin }) => (
  <div className="header-container">
    <div className="header">
      <Link className="header__logo" to="/dashboard">
        <div className="header__logo__image"></div>
        Melon
      </Link>
      <button className="header__logout" onClick={startLogin}>Login</button>
    </div>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin()),
});

export default connect(undefined, mapDispatchToProps)(Header);

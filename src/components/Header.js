import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { startLogin, startLogout } from '../actions/auth';

export const Header = ({ startLogin, startLogout }) => (
  <div className="header-container">
    <div className="header">
      <Link className="header__logo" to="/dashboard">
        <div className="header__logo__image"></div>
        Melon
      </Link>
      <button className="header__logout" onClick={startLogin}>Login</button>
      <button onClick={startLogout}>Logout</button>
    </div>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin()),
  startLogout: () => dispatch(startLogout()),
});

export default connect(undefined, mapDispatchToProps)(Header);

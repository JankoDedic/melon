import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { startLogout } from '../actions/auth';
import Logo from './Logo';

export const Header = ({ startLogin, startLogout }) => (
  <div className="header-container">
    <div className="header">
      <Link className="router-link" to="/dashboard">
        <Logo />
      </Link>
      <button className="header__logout" onClick={startLogout}>Logout</button>
    </div>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout()),
});

export default connect(undefined, mapDispatchToProps)(Header);
